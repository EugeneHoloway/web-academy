import './homework-12b.scss';

var titleItem = document.querySelectorAll('.tabs-title'),
    bodyItem = document.querySelectorAll('.tabs-body');
titleItem.__proto__.forEach = [].__proto__.forEach;

var activeTab;
titleItem.forEach(function(item, i, titleItem) {
    item.addEventListener('click', function(e) {
        //show new thingy;
        this.classList.add('tabs-active');
        this.nextElementSibling.classList.add('active');
        //hide old thingy
        if (activeTab) {
            activeTab.classList.remove('tabs-active');
            activeTab.nextElementSibling.classList.remove('active');
        }
        //update thingy
        activeTab = (activeTab === this) ? 0 : this;
    });
});