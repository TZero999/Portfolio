/* Variables */  
  
    let lng_slctr = document.getElementById('RUS-ENG');

    let cntct_btn = document.getElementById('Contacts_Button');
    let cntct_bnr = document.getElementById('Contacts');

    let thnks = document.getElementById('Thanks')
    let thnks_btn = document.getElementById('Thanks_Button');
    let thnks_bnr = document.getElementById('Thanks_Banner');

/* Contacts */

    cntct_btn.addEventListener('click', cntct_event);

    function cntct_event() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );

        window.scrollTo({
            top: scrollHeight,
            behavior: "smooth",
        });


        cntct_bnr.style.transition = 'all 2s';
        cntct_bnr.style.transform = 'translate(0px, -122px)';
        setInterval( () => cntct_bnr.style.transition = '' ),2000;

        cntct_bnr.onmouseleave = function() {
        cntct_bnr.style.transition = 'all 2s';
        cntct_bnr.style.transform = 'translate(0px, 0px)';
        setInterval( () => cntct_bnr.style.transition = '' ),2000;};
        /* SetInterval 1500 IF !mouseover transform translate обратно */

    }

/* Thanks */

    thnks_btn.addEventListener('click', thnks_event);

    function thnks_event() {

        console.log('Click!');
        thnks_btn.style.transition = 'all 1s';
        thnks_bnr.style.transition = 'all 1s';

        thnks_btn.style.opacity = 0;
        thnks_bnr.style.opacity = 1;

        thnks.onmouseleave = function() {
            thnks_btn.style.opacity = 1;
            thnks_bnr.style.opacity = 0;
            console.log('Oooops!');
        };
    }


/* RUS-ENG Loader */
lng_slctr.addEventListener('click', JSLoad('./js/RUS-ENG.js'));