import React from 'react';

const Footer = () => {
    return ( 
        <div class='container-fluid footer-style' >
        <div class="row">
            <div class="d-none d-sm-block col-sm-4">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><a href="index.html" class='text-secondary'><i class="fa fa-home fa-lg"></i> Home</a></li>
                    <li><a href="about.html" class='text-secondary'><i class="fa fa-question-circle fa-lg"></i> About</a></li>
                    <li><a href="movies.html" class='text-secondary'><i class="fa fa-film fa-lg"></i> Movies</a></li>
                    <li><a href="martialArts.html" class='text-secondary'><i class="fa fa-male fa-lg"></i> Martial Arts</a></li>
                    <li><a href="facts.html" class='text-secondary'><i class="fa fa-info fa-lg"></i> Facts</a></li>
                </ul>
            </div>
            <div class="d-none d-sm-block col-sm-4">
                <h5>Fact</h5>
               <p class='fact-message'></p>
            </div>
            <div class="col col-sm-4">
                <h5>Contact</h5>
                <i class="fa fa-phone fa-lg text-secondary"></i> 1-800-867-5029<br />
                <i class="fa fa-envelope-o fa-lg text-secondary"></i> chuck@roundHouse.com
            </div>
       </div>
    </div>

     );
}
 
export default Footer;