import refs from './refs';

export function renderFeedbacks(feedbacks) {
  const feedbacksMarkup = feedbacks
    .map(({ _id, name, rating, descr }) => {
      // Округлення рейтингу до цілого числа за правилами округлення 
      const ratingRound = Math.round(rating);
      // Створення розмітки
      return `
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${_id} data-score=${ratingRound}></div>
            <p class="feedback-descr">"${descr}"</p>
            <p class="feedback-name">${name}</p>
          </div>
        </div>`;
    })
    .join('');

  // Додавання розмітки в DOM
  refs.feedbacksList.insertAdjacentHTML('beforeend', feedbacksMarkup);
}
