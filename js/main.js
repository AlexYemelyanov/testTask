'use strict';

const closeBtn = document.querySelector('.modal__window-close'),
	closeIco = document.querySelector('.eva--close-outline'),
	navItem = document.querySelectorAll('.navigation__item'),
	urlParams = new URLSearchParams(window.location.search),
	language = urlParams.get('lang'),
	modal = document.querySelector('.modal'),
	radioButtons = document.querySelectorAll('input[type="radio"]'),
	btn = document.getElementById('continue');

radioButtons.forEach((radio) => {
	radio.addEventListener('change', (event) => {
		if (event.target.checked) {
			console.log('Выбрана радио-кнопка:', event.target);
			if (event.target == document.getElementById('yearlyRadio')) {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					window.location.href = 'https://apple.com/';
				});
			}
			if (event.target == document.getElementById('weeklyRadio')) {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					window.location.href = 'https://google.com/';
				});
			}
			// Здесь можно выполнить действия, связанные с выбранной радио-кнопкой
		}
	});
});

function changeLanguage() {
	const urlParams = new URLSearchParams(window.location.search);
	const language = urlParams.get('lang') || 'en'; // Язык по умолчанию 'en' (английский)

	// Загрузка языковых данных (пример)
	fetch(`/i18n/${language}.json`)
		.then((response) => response.json())
		.then((i18n) => {
			// Обновление текста на странице
			document.getElementById('use').innerHTML = i18n[`Terms of Use`];
			document.getElementById('privacy').innerHTML = i18n[`Privacy Policy`];
			document.getElementById('restore').innerHTML = i18n[`Restore`];
			document.getElementById('title').innerHTML =
				i18n[`Get Unlimited <br>Access`];
			document.getElementById('art').innerHTML =
				i18n[`Unlimited Art <br>Creation`];
			document.getElementById('styles').innerHTML =
				i18n[`Exclusive <br>Styles`];
			document.getElementById('magic').innerHTML =
				i18n[`Magic Avatars <br>With 20% Off`];
			document.getElementById('best').innerHTML = i18n[`BEST OFFER`];
			document.getElementById('yearly').innerHTML = i18n[`YEARLY ACCESS`];
			document.getElementById('perYear').innerHTML =
				i18n[`Just {{price}} per year`];
			document.getElementById('perWeekYear').innerHTML =
				i18n[`{{price}} <br>per week`];
			document.getElementById('weekly').innerHTML = i18n[`WEEKLY ACCESS`];
			document.getElementById('continue').innerHTML = i18n[`Continue`];
			document.getElementById('perWeek').innerHTML =
				i18n[`{{price}} <br>per week`];

			// Обновление URL (необязательно)
			const newUrl = new URL(window.location);
			newUrl.searchParams.set('lang', language);
			history.pushState({}, '', newUrl);
		})
		.catch((error) => {
			console.error('Ошибка загрузки языковых данных:', error);
		});
}

const changeColor = () => {
	if (modal.classList.contains('open')) {
		navItem.forEach((elem) => {
			elem.classList.add('white');
			elem.classList.remove('black');
		});
	} else {
		navItem.forEach((elem) => {
			elem.classList.add('black');
			elem.classList.remove('white');
		});
	}
};

const closeModal = (e) => {
	modal.classList.add('hide');
	modal.classList.remove('open');
};

closeIco.addEventListener('click', (e) => {
	closeModal();
	changeColor();
});

// window.addEventListener('popstate', changeLanguage);
window.addEventListener('load', changeLanguage);

changeColor();
