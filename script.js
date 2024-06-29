function redirection(event) {
    event.preventDefault();
    const link = event.target;
    link.style.animation = 'fadeOut 1s ease';
    setTimeout(() => {
        window.location.href = "index2.html";
    }, 3000);
}

function changeContainerColor() {
    const container = document.querySelector('#container1');
    container.style.backgroundColor = '#1e3ecc';
}








document.addEventListener('DOMContentLoaded', function() {
    var contentElement = document.getElementById('container1');
    contentElement.classList.add('start-animation'); // Ajoutez une classe pour démarrer l'animation
});
window.addEventListener('load', () => {
            // Ajoutez la classe "show" au texte pour déclencher la transition
            document.querySelector('#intro').classList.add('show');
        });
        document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('#icon1');
    const myElement = document.querySelector('#container1');
    const myElement2 = document.querySelector('.iconimg');

    link.addEventListener('click', function() {
        // Change la couleur de fond de la div (par exemple, en blanc)
        myElement.classList.toggle('dark');
        myElement2.classList.toggle('dark');
        link.classList.toggle('dark');
        
    });
});









document.addEventListener('DOMContentLoaded', function() {
    var contentElement = document.getElementById('container1');
    contentElement.classList.add('start-animation'); // Ajoutez une classe pour démarrer l'animation
});
window.addEventListener('load', () => {
            // Ajoutez la classe "show" au texte pour déclencher la transition
            document.querySelector('#intro').classList.add('show');
        });
        document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('#icon1');
    const myElement = document.querySelector('#container5');
    const myElement1 = document.querySelector('#test');
    const myElement2 = document.querySelector('#desc');
    const myElement3 = document.querySelector('#titlefilm');
    const myElement4 = document.querySelector('.saisonselect');
    const myElement5 = document.querySelector('.iconimg');

    link.addEventListener('click', function() {
        // Change la couleur de fond de la div (par exemple, en blanc)
        myElement.classList.toggle('dark');
        myElement1.classList.toggle('dark');
        myElement2.classList.toggle('dark');
        myElement3.classList.toggle('dark');
        myElement4.classList.toggle('dark');
        myElement5.classList.toggle('dark');
        link.classList.toggle('dark');
        
    });
});


setInterval(function() {
    var Image_Id = document.querySelector('.likeimg');
    var Image_Id2 = document.querySelector('.favimg');
            if (sessionStorage.getItem('like?') === 'yes') {
                Image_Id.src = "pouceup.png";
            }
            else {
                Image_Id.src = "pouce.png";
            }

            if (sessionStorage.getItem('fav?') === 'yes') {
                Image_Id2.src = "favup.png";
            }
            else {
                Image_Id2.src = "fav.png";
            }
        }, 100);



        function likeclick() {
            var Image_Id = document.querySelector('.likeimg');
            if (sessionStorage.getItem('like?') === 'no') {
                sessionStorage.setItem('like?','yes');
            }
            else {
                sessionStorage.setItem('like?','no');
            }
        }

        function favclick() {
            var Image_Id = document.querySelector('.favimg');
            if (sessionStorage.getItem('fav?') === 'no') {
                sessionStorage.setItem('fav?','yes');
            }
            else {
                sessionStorage.setItem('fav?','no');
            }
        }

window.onload = function() {
            setTimeout(function() {
                const myDiv = document.querySelector(".group2");
                const myDiv1 = document.querySelector(".group3");
                const myDiv2 = document.querySelector("#titlefilm");
                myDiv.style.width = "600px"; // Double la largeur
                myDiv.style.position = "relative"; // Double la largeur
                myDiv1.style.left = "10%"; // Double la hauteur
                myDiv2.style.opacity = "1"; // Double la hauteur
            }, 3000);
};

        function s2() {
            var content = document.querySelector('.saisonselect');
            var modal = document.querySelector('.modal');
                content.textContent = "Saison 2";
                modal.style.display = "none";
            }

        function s1() {
            var content = document.querySelector('.saisonselect');
            var modal = document.querySelector('.modal');
                content.textContent = "Saison 1";
                modal.style.display = "none";
            }

        function s3() {
            var content = document.querySelector('.saisonselect');
            var modal = document.querySelector('.modal');
                content.textContent = "Saison 3";
                modal.style.display = "none";
            }

        function startvideo() {
            var video = document.querySelector('#videodiv');
            var myVideo = document.getElementById("amixemvideo"); 
                video.style.display = "flex";
                myVideo.play(); 
            }

        function opmodal() {
            var modal = document.querySelector('.modal');
            if (modal.style.display = "none") {
                modal.style.display = "flex";
            }
        }

        

function playPause() { 
    var myVideo = document.getElementById("amixemvideo"); 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
}

function upSound() { 
    var myVideo = document.getElementById("amixemvideo"); 
    myVideo.volume = Math.min(1,myVideo.volume + 0.1);
} 

function downSound() { 
    var myVideo = document.getElementById("amixemvideo"); 
    myVideo.volume = Math.max(0,myVideo.volume - 0.1); 
} 

        function closevid() {
            var modal = document.querySelector('#videodiv');
            var myVideo = document.getElementById("amixemvideo"); 
                modal.style.display = "none";
                myVideo.pause();
        }


        document.addEventListener('DOMContentLoaded', () => {
            const maDiv = document.querySelector('.saisonselect');
            const maDiv2 = document.querySelector('#titlefilm');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        maDiv.style.position = 'sticky';
                        maDiv.style.top = 40+'px';
                    }
                });
            });

            observer.observe(maDiv2);
        });

        document.addEventListener('DOMContentLoaded', () => {
            const maDiv = document.querySelector('.saisonselect');
            const maDiv2 = document.querySelector('#titlefilm');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        maDiv.style.position = 'absolute'; // Change la couleur quand la div n'est plus visible
                        maDiv.style.top = 520+'px';
                    }
                });
            });

            observer.observe(maDiv2);
        });











        /* Test donné stocké en dessous de ce message !!!!! */

        