function showPopup(id) {
        document.getElementById(id).style.display = 'flex';
    }

    function closePopup(id) {
        document.getElementById(id).style.display = 'none';
    }

    document.getElementById('searchInput').addEventListener('keyup', function() {
        var filter = this.value.toLowerCase();
        var movies = document.getElementsByClassName('movie');
        for (var i = 0; i < movies.length; i++) {
            var title = movies[i].getAttribute('data-title').toLowerCase();
            if (title.indexOf(filter) > -1) {
                movies[i].style.display = 'inline-block';
            } else {
                movies[i].style.display = 'none';
            }
        }
    });