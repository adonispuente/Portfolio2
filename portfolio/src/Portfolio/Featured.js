import GOF from '../Pictures/GOF.png'

export default function Featured(){
return(
    <section class='featured' id='MyWork'>
        <div>

        </div>
        <div class='left'>
            <div class='inner transition2'>
                <p class='subtitle'>Featured Project</p>
                <a href='https://adonis-game-of-life.netlify.app/' target="_blank" class='featured-title'> Conways Game of Life</a>

                <p class='featured=desc'>A game implementing the rules of Conways Game of Life! It is built using
                React & JavaScript!
                (Desktop)
                </p>
            </div>
        </div>
        <a href='https://adonis-game-of-life.netlify.app/' target="_blank" > <img class='right transition2'src={GOF} alt='Featured Project'></img></a>
        
    </section>
)

}