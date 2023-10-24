const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

const imgFolder = '../img/';

const imageContainerNode = document.querySelector('#image-container');

function getUrlImg(i) {
  return `url(${imgFolder}${pictures[i]}.jpeg)`;
}

let i = 0;

imageContainerNode.addEventListener('click', (e) => {

  if (e.target.id === 'right-click' || e.target.classList.contains('fa-caret-right')) {
    i++;
    if (i > pictures.length - 1) {
      i = 0;
    }
    const getUrl = getUrlImg(i);
    imageContainerNode.style.backgroundImage = getUrl;
  };

  if (e.target.id === 'left-click' || e.target.classList.contains('fa-caret-left')) {
    i--;
    if (i < 0) {
      i = pictures.length - 1;
    }
    const getUrl = getUrlImg(i);
    imageContainerNode.style.backgroundImage = getUrl;
  };
})