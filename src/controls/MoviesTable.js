import React from 'react';

const MoviesTable = () => {
    return ( 
        <>
            <div class='table-responsive'>
                <table class='table table-striped'>
                    <thead>
                        <tr><th>Ranking</th><th>Title</th><th>Year</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>Expendables</td><td>2012</td></tr>
                        <tr><td>2</td><td>The Way of The Dragon</td><td>1972</td></tr>
                        <tr><td>3</td><td>Code of Silence</td><td>1985</td></tr>
                        <tr><td>4</td><td>Lone Wolf McQuade</td><td>1983</td></tr>
                        <tr><td>5</td><td>Missing in Action</td><td>1984</td></tr>
                        <tr><td>6</td><td>An Eye For an Eye</td><td>1981</td></tr>
                        <tr><td>7</td><td>Invasion USA</td><td>1985</td></tr>
                        <tr><td>8</td><td>Delta Force</td><td>1986</td></tr>
                        <tr><td>9</td><td>The Octogon</td><td>1980</td></tr>
                        <tr><td>10</td><td>A Force of One</td><td>1979</td></tr>
                    </tbody>
                </table>
            </div>
            <i>courtesy of: </i> <a href='https://www.ultimatemovierankings.com/chuck-norris-movies/' target="_blank">Ultimate Movie Rankings</a>
        </>
     );
}
 
export default MoviesTable;