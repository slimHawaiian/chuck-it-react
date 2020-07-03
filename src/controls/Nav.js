import React from 'react';

const Nav = () => {
    return (  
        <nav class="navbar navbar-expand-sm navbar-dark sticky-top background-color">
            <div class="container">
                <a class="navbar-brand" href="index.html"><h1>Chuck-It</h1></a>  
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#ciNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="ciNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="index.html"><i class="fa fa-home fa-lg"></i> Home</a></li>
                        <li class="nav-item"><a class="nav-link active" href="about.html"><i class="fa fa-question-circle fa-lg"></i> About</a></li>
                        <li class="nav-item"><a class="nav-link" href="movies.html"><i class="fa fa-film fa-lg"></i> Movies</a></li>
                        <li class="nav-item"><a class="nav-link" href="martialArts.html"><i class="fa fa-male fa-lg"></i> Martial Arts</a></li>
                        <li class="nav-item"><a class="nav-link" href="facts.html"><i class="fa fa-info fa-lg"></i> Facts</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
 
export default Nav;