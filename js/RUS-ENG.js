/* Variables */  

/* Script */

lng_slctr.addEventListener('click', function(){
    
    if (cntct_btn.innerHTML === 'Контакты') 
    
    {
        cntct_btn.innerHTML = 'Contacts';
        thnks_btn.innerHTML = 'Special thanks to:';

        document.getElementById('My_name_is').childNodes[1].innerHTML = 'My name is';
        document.getElementById('NAME').childNodes[1].innerHTML = 'Jaroslav';
        document.getElementById('Welcome').childNodes[1].innerHTML = 'I am glad to welcome you to my portfolio page.';
        document.getElementById('Who_i_am').childNodes[1].innerHTML = 'I am a QA engineer with over 1.5 years of experience.';

        document.getElementById('Projects').innerHTML = 'Projects';
        document.getElementById('Project_1_Name').innerHTML = 'JS Autotests';
        document.getElementById('Project_2_Name').innerHTML = 'Specs';
        document.getElementById('Project_3_Name').innerHTML = 'Bash-scripts';
        document.getElementById('Project_4_Name').innerHTML = 'QA Library';
        document.getElementById('Project_5_Name').innerHTML = 'Coding';

        document.getElementById('Tanya').childNodes[2].nodeValue = 'Tatyana Zykina - ideas & editing';
        document.getElementById('Photographer').childNodes[4].nodeValue = 'Valentina Melnikova - photography';
    }

    else 
    
    {
        cntct_btn.innerHTML = 'Контакты';
        thnks_btn.innerHTML = 'Особая благодарность:';

        document.getElementById('My_name_is').childNodes[1].innerHTML = 'Меня зовут';
        document.getElementById('NAME').childNodes[1].innerHTML = 'Ярослав';
        document.getElementById('Welcome').childNodes[1].innerHTML = 'И я рад приветствовать вас на странице своего портфолио.';
        document.getElementById('Who_i_am').childNodes[1].innerHTML = 'Я - QA-инженер с более чем 1,5 годами опыта работы.';

        document.getElementById('Projects').innerHTML = 'Проекты';
        document.getElementById('Project_1_Name').innerHTML = 'Автотесты JS';
        document.getElementById('Project_2_Name').innerHTML = 'Артефакты';
        document.getElementById('Project_3_Name').innerHTML = 'Bash-скрипты';
        document.getElementById('Project_4_Name').innerHTML = 'QA Библиотека';
        document.getElementById('Project_5_Name').innerHTML = 'Кодинг';
        
        document.getElementById('Tanya').childNodes[2].nodeValue = 'Татьяна Зыкина - идеи и редактура';
        document.getElementById('Photographer').childNodes[4].nodeValue = 'Валентина Мельникова - фотография';
    };

});