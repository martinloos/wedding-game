export function playMemory ()
{
    (function(d,w) {
  
        let cards = [];
        let matches = 0;
        const flipped_cards = [];
        
        
        const build_board = () => {
          const board = d.querySelector('.board');
          cards = get_cards();
          const card_items = cards.map((card, id) => {
            return `<li class="card fab fa-pagelines" data-id="${id}"></li>`;
          }).join('');
          
          board.innerHTML = card_items;
          board.addEventListener('click', flip_card);
         
        }
        
        const flip_card = (e) => {
          if (!e.target.matches('.card')) return false;
          if (flipped_cards.length == 2) return false;
          
          const card = e.target;
          if (card.matches('.is-match')) return false;
                
          card.classList.remove(card.className.split(' ').pop());
          card.classList.add(`fa-${cards[card.dataset.id]}`);
        
          flipped_cards.push(
            {
              card,
              name: cards[card.dataset.id]
            }
          );
          
          if (flipped_cards.length == 2) {
            check_match();
          }
        
        };
        
        const check_match = () => {
          if (flipped_cards[0].name === flipped_cards[1].name) {
            flipped_cards.forEach((flipped_card) => {
                flipped_card.card.classList.add('is-match');
            });
            
            matches += 2;
            flipped_cards.length = 0;
            
            if (game_over()) {
              alert('Game finished! You are awesome!!! Your code is 81');
              build_board();
            }
            
          }else {
            w.setTimeout(function(){
              flipped_cards.forEach((flipped_card) => {
                const card = flipped_card.card;
                card.classList.remove(card.className.split(' ').pop());
                card.classList.add('fa-pagelines');
              });  
              flipped_cards.length = 0;
            },800);
          }
        }
        
        const shuffle_cards = (stack) => {
          const shuffled = [];
          const random_numbers = [];
          const total = stack.length;
          let i = 0;
          
          while(i<total) {
            const number = Math.floor(Math.random() * total);
            
            if (!random_numbers.includes(number)) {
              shuffled.push(stack[number]);
              random_numbers.push(number);
              i++;
            }
          }
              
          return shuffled;
         
        }
        
        const game_over = () => {
          if (matches === cards.length) {
            matches = 0;
            return true;
          } 
          
          return false;
        }
        
        const get_cards = () => {
          const stack = [
            'jga',
            'csd',
            'oktoberfest',
            'jga2',
            'csd2',
            'oktoberfest2'
          ];
          
          const full_stack = stack.concat(stack);
          
          return shuffle_cards(full_stack);
        }
        
        build_board();
      })(document,window);
}