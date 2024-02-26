const itemsQuestionsAndAnswers = document.querySelectorAll('.item');

itemsQuestionsAndAnswers.forEach(function(item){
    item.addEventListener('click', function(){
        const currentActiveItem = document.querySelector('.active');

        if(currentActiveItem) {
            currentActiveItem.classList.remove('active');
        }

        item.classList.add('active');
    })
})