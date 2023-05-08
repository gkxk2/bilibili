// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox']});
  const page = await browser.newPage();

  // await page.goto('https://developer.chrome.com/');

  // // Set screen size
  // await page.setViewport({width: 1080, height: 1024});

  // // Type into search box
  // await page.type('.search-box__input', 'automate beyond recorder');

  // // Wait and click on first result
  // const searchResultSelector = '.search-box__link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector.evaluate(el => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  // 进入 https://www.zhihu.com/ , 并保存截图
  await page.goto('https://space.bilibili.com/19886758');
  await page.screenshot({path: 'bilibili.png'});

  await browser.close();
})();
