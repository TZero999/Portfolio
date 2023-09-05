// @ts-check
const { test, expect } = require('@playwright/test');
const url = 'localhost:5500/';

test.beforeEach(async ({ context }) => {
  await context.route(/head.css$/, route => route.abort() );
  await context.route(/animation.css$/, route => route.abort() );
  await context.route(/preloader.css$/, route => route.abort() );
});

test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

/* Проверяем, что страница открывается */
test('Portfolio Web-app is opening?', async ({page}) => {
  let name = page.locator('.Title');
  await expect(page).toHaveTitle('Jaroslaw QA');
  await expect(name).toHaveText('Ярослав');

    console.log('Page are opening');
});

/* Проверяем, что кнопка "Контакты" выводит элемент-банер с контактными данными*/
test('Button "Contacts" are working?', async ({page}) => { 
  let button = page.locator('.Contacts_Button');
  let banner = page.locator('.Contacts');
  await button.click();

  await expect(banner).toBeInViewport();

    console.log('Button "Contacts" are working');
});

/* Проверяем, что кнопка "Особая благодарность" делает видимым элемент-банер с именами */
test('Button "Special thanks to" are working?', async ({page}) => {
  let button = page.locator('.Thanks_Button');
  let banner = page.locator('.Thanks_Banner');
  await button.click();

  await expect(banner).toBeInViewport();

    console.log('Button "Special thanks to" are working');
});  

/* Проверяем, что кнопка "RUS | ENG" работает и переключает текст внутри элементов */
test('Button "RUS|ENG" are working and switch page language?', async ({page}) => {
  let button = page.locator('.RUS-ENG');
  let name = page.locator('.Title');

  await button.click();
  await expect(name).toHaveText('Jaroslav');

  await button.click();
  await expect(name).toHaveText('Ярослав');

    console.log('Button "RUS | ENG" are working');
})



/* 



let banerPos = function() { 
  let contacts = document.getElementById('Contacts');
  let pos = window.getComputedStyle(contacts).transform;
  if (pos == "matrix(1, 0, 0, 1, 0, -122)") return 'OK';
}
*/

/* NOT WORKING !!! 
let disable_animation = async function(page) {
  let a0 = page.locator('.Appear');
  let a1 = page.locator('.Second');
  let a2 = page.locator('.Third');
  let a3 = page.locator('.Fourth');
  
  let stop = async function(elem) {
    await page.locator(elem).evaluate(element => element.style.animationDuration = '0s');
    await page.locator(elem).evaluate(element => element.style.animationDelay = '0s');
  }

  stop(a0); stop(a1); stop(a2); stop(a3);
}
*/

/*
await disable_load();
*/