<h1>RPG</h1>

<p>Pour ce projet, nous allons te demander de créer un RPG&nbsp;!</p>

<h2>1. Introduction</h2>

<p>Désormais, tu sais utiliser les classes ES6 de JavaScript. Savoir organiser sa POO efficacement n&#39;est pas une simple tâche, mais il existe des domaines où la POO est extrêmement appropriée.</p>

<p>Le domaine des jeux est, comme tu as pu le voir dans le cours, une très bonne introduction à la POO. Ton objectif, aujourd&#39;hui, sera de créer une partie de jeu vidéo&nbsp;!</p>

<p>Tu devras mettre en place plusieurs personnages qui pourront se taper dessus <a href="https://www.youtube.com/watch?v=wSBn77_h_6Q" rel="nofollow" target="_blank">comme tout personnage de jeu vidéo qui se respecte</a>. Chacun de ces personnages, en fonction de sa classe, sera capable de faire une action qui lui est propre.</p>

<p>Une fois que toutes tes classes seront créées, tu devras englober tes personnages dans un jeu. Ce jeu se jouera au tour par tour, via la console.</p>

<h2>2. Le projet</h2>

<h3>2.1. Description</h3>

<p>Nous allons faire un jeu où le joueur pourra contrôler 5 personnages qui vont se combattre à mort, façon <a href="https://www.youtube.com/watch?v=7I9ZmhvQklE&feature=youtu.be&t=4010" rel="nofollow" target="_blank">gladiateurs</a>. Chaque personnage aura des caractéristiques qui lui sont propres.</p>

<p>Chaque tour, pour chaque personnage, tu vas choisir qui attaquer. Le personnage qui a le plus de points de vie à la fin de 10 tours a gagné le jeu&nbsp;!</p>

<h3>2.2. Nos personnages</h3>

<h4>2.2.1. Personnages et Classes</h4>

<p>Chaque personnage aura trois caractéristiques&nbsp;:</p>

<ul>
<li><code class="prettyprint">hp</code>&nbsp;: acronyme de <u>health points</u>, soient points de vie. Un personnage commence avec un nombre défini de <code class="prettyprint">hp</code>. S&#39;il passe à 0 point de vie, il devient <code class="prettyprint">loser</code></li>
<li><code class="prettyprint">dmg</code>&nbsp;: acronyme de <u>damage</u>, soient points de dégât. Un personnage pourra toujours effectuer une attaque simple enlevant un nombre précis de points de vie à une cible précise</li>
<li><code class="prettyprint">mana</code>&nbsp;: les points de mana. Le mana est une ressource qui permet d&#39;utiliser des attaques spéciales. Un personnage commence le jeu avec un nombre précis de mana qui lui permettront d&#39;effectuer son sortilège spécial (coûtant un certain nombre de mana). Par exemple si un personnage commence avec 150 points de mana et que son sortilège spécial lui coûte 15 points de mana, il pourra effectuer 10 fois ce sortilège avant de tomber à 0 point de mana</li>
</ul>

<p>Dans le jeu, nous aurons 5 classes&nbsp;:</p>

<ul>
<li>La classe <code class="prettyprint">Fighter</code> (combattant équilibré sous tous les bords)</li>
<li>La classe <code class="prettyprint">Paladin</code> (chevalier puissant et défensif)</li>
<li>La classe <code class="prettyprint">Monk</code> (prêtre qui peut se guérir)</li>
<li>La classe <code class="prettyprint">Berzerker</code> (bourrin avec une attaque élevée)</li>
<li>La classe <code class="prettyprint">Assassin</code> (rusé et fourbe)</li>
</ul>

<p>Chacune des classes aura une attaque spéciale spécifique à la classe, coûtant un certain nombre de mana. Chaque tour le joueur choisira s&#39;il désire utiliser l&#39;attaque normale, ou l&#39;attaque spéciale.</p>

<p>Afin de rendre ton code plus lisible, les 5 classes de personnage seront étendues d&#39;une autre classe <code class="prettyprint">Character</code>. </p>

<h4>2.2.2. Les classes</h4>

<p>Voici les spécificités des 5 classes</p>

<h5>2.2.2.1. Fighter</h5>

<p>Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).</p>

<p>Le Fighter aura une attaque spéciale <code class="prettyprint">Dark Vision</code>, infligeant 5 dégâts. Jusqu&#39;au prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.</p>

<h5>2.2.2.1. Paladin</h5>

<p>Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.</p>

<p>Le Paladin aura une attaque spéciale <code class="prettyprint">Healing Lighting</code>, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.</p>

<h5>2.2.2.1. Monk</h5>

<p>Le Monk commence avec 8 points de vie et 200 points de mana. Il a 2 points de dégât.</p>

<p>Le Monk, quand a lui, aura une attaque spéciale <code class="prettyprint">heal</code> rendant 8 PV. Elle coute 25 mana.</p>

<h5>2.2.2.1. Berzerker</h5>

<p>Le Berzerker commence avec 8 points de vie et 0 point de mana. Il a 4 points de dégât.</p>

<p>Le Berzerker aura une attaque spéciale <code class="prettyprint">Rage</code> lui donnant <code class="prettyprint">+1</code> pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).</p>

<h5>2.2.2.1. Assassin</h5>

<p>L&#39;Assassin commence avec 6 points de vie et 20 points de mana. Il a 6 points de dégât.</p>

<p>L&#39;Assassin aura une attaque spéciale <code class="prettyprint">Shadow hit</code> lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant <code class="prettyprint">7</code> dégâts puis, si l&#39;adversaire n&#39;est pas mort, l&#39;assassin perdra <code class="prettyprint">7</code> dégâts à son tour. Cette attaque coûte 20 mana.</p>

<h4>2.2.3. Nos personnages</h4>

<p>Voici nos personnages&nbsp;:</p>

<ul>
<li><code class="prettyprint">Grace</code> sera le personnage de la classe <code class="prettyprint">Fighter</code></li>
<li><code class="prettyprint">Ulder</code> sera le personnage de la classe <code class="prettyprint">Paladin</code></li>
<li><code class="prettyprint">Moana</code> sera le personnage de la classe <code class="prettyprint">Monk</code></li>
<li><code class="prettyprint">Draven</code> sera le personnage de la classe <code class="prettyprint">Berzerker</code></li>
<li><code class="prettyprint">Carl</code> sera le personnage de la classe <code class="prettyprint">Assassin</code></li>
</ul>

<h4>2.2.4. Caractéristiques des personnages</h4>

<p>Tous les personnages ont une méthode <code class="prettyprint">takeDamage</code>, prenant en paramètre le nombre de dégâts à recevoir. Ils ont également une seconde méthode <code class="prettyprint">dealDamage</code>, prenant en paramètre la <code class="prettyprint">victim</code> à choisir. Également, ils ont un attribut <code class="prettyprint">status</code>, par défaut à <code class="prettyprint">playing</code>. Il pourra passer à <code class="prettyprint">winner</code> ou <code class="prettyprint">loser</code>.</p>

<p>Si jamais les PV d&#39;un personnage tombent à 0, il est éliminé et ne peut plus jouer ni être attaqué. Son statut passe alors à <code class="prettyprint">loser</code>. Lorsqu&#39;un personnage en tue un autre, il regagne <code class="prettyprint">20</code> point de mana.</p>

<h4>2.2.5. En avant ?</h4>

<p>À partir de là, tu as toutes les infos nécessaires pour créer les classes liées aux personnages. Je t&#39;invite à le faire avant de passer aux classes liées au système du jeu.</p>

<h3>2.3. Notre système</h3>

<p>Tout le jeu se passera sur la console. Si jamais tu as commencé à mettre en place une interface HTML, libre à toi de l&#39;utiliser ou non si tu préfères.</p>

<p>Nos 5 personnages sont instanciés initialement dans la partie.</p>

<p>Une classe <code class="prettyprint">Game</code> doit être mise en place. Elle contiendra un attribut <code class="prettyprint">turnLeft</code>, indiquant le nombre de tours restants. Par défaut, <code class="prettyprint">10</code>. Grâce à la méthode <code class="prettyprint">newTurn</code>, on retire un tour. Une fois à 0, la partie est terminée, et les personnages restants gagnent, voyant ainsi leur paramètre <code class="prettyprint">status</code> passer à <code class="prettyprint">winner</code>.</p>

<p>Une classe <code class="prettyprint">Turn</code> sera dédiée à un tour de jeu, et fera tout ce qui concerne le tour de jeu : les attaques, etc. <code class="prettyprint">Turn.new</code> déclarera un nouveau tour.</p>

<p>C&#39;est à toi de réfléchir comment tu vas conceptualiser ta classe, essaie de réfléchir de quoi tu peux avoir besoin tout en gardant en tête que le but est d&#39;interagir avec une page HTML.</p>

<ul>
<li>Une méthode <code class="prettyprint">startTurn</code> est activée, loggant ainsi <code class="prettyprint">It&#39;s turn X</code>, X étant le numéro du tour actuel.</li>
<li>Les personnages sont appelés chacun leur tour, dans un ordre aléatoire. Ils seront appelés par la console qui loggera automatiquement <code class="prettyprint">It&#39;s time for Y to play</code>.</li>
<li>Ils peuvent utiliser leur méthode qui leur est propre ou utiliser <code class="prettyprint">dealDamage</code> sur l&#39;ennemi de leur choix. Ensuite, il sera loggé <code class="prettyprint">X is attacking Y. He deals him Z damages. Y got A lifepoints left</code>.</li>
<li>Une fois que tous les joueurs ont joué, on log l&#39;ensemble des personnages encore en vie et on utilise <code class="prettyprint">newTurn</code>.</li>
</ul>

<p>S&#39;il ne reste plus qu&#39;un joueur en vie, il devient le winner et la partie s&#39;arrête. L&#39;utilisateur a la possibilité à tout moment d&#39;utiliser la méthode <code class="prettyprint">watchStats</code> pour afficher les statistiques de tout le monde, pour réfléchir qui attaquer, etc.</p>

<p>Libre à toi de la designer comme tu le souhaites.</p>

<h3>2.4. Et après ?</h3>

<p>Franchement, pas mal non&nbsp;! L&#39;avantage de ce jeu et du principe du jeu d&#39;aventures est que l&#39;on part un peu à l&#39;aventure en y jouant et que tout le monde aura une classe préférée (perso moi c&#39;est le monk, car je donne beaucoup tavu). </p>

<p>Aussi, le fait d&#39;avoir cette base te permettra d&#39;ajouter des fonctionnalités bonus qui vont agrémenter ton jeu. </p>

<p>Voici quelques idées pour donner du pep&#39;s à ton jeu&nbsp;:</p>

<h4>2.4.1. Aléatoire</h4>

<p>Fais en sorte qu&#39;une partie commence plutôt avec 5 personnages tirés au hasard, avec des classes tirées au hasard. Une classe aura toujours le même nombre de points de vie, mana et points de dégât, peu importe le personnage. </p>

<h4>2.4.2. Nouvelles classes</h4>

<p>Ajoute deux nouvelles classes.</p>

<p>Le <code class="prettyprint">Wizard</code>, un puissant sage utilisant des sorts magiques pour taper ses adversaires. Un wizard commence avec 10 points de vie et 200 points de mana. Il a 2 points de dégât.</p>

<p>Le wizard a une attaque spéciale <code class="prettyprint">Fireball</code> qui inflige 7 points de dégât et qui coûte 25 points de mana.</p>

<p>Pour la seconde classe, je te laisse utiliser ton imagination&nbsp;:)</p>

<h4>2.4.3. Une meilleure interface utilisateur</h4>

<p>N&#39;hésite pas à renvoyer joliment l&#39;état des personnages en prenant le temps de customiser la façon dont l&#39;information est rendue au joueur.</p>

<h4>2.4.4. Équilibre tes classes !</h4>

<p>Peut-être que les classes ne sont pas super bien équilibrées et qu&#39;il faut revoir certaines classes à la hausse ou d&#39;autres à la baisse. Je te laisse ajuster les classes.</p>

<h4>2.4.5. De l&#39;intelligence artificielle</h4>

<p>C&#39;est le niveau des champions&nbsp;! Fais en sorte que le joueur ne peut jouer qu&#39;avec un seul personnage et que les autres personnages soient contrôlés par l&#39;ordinateur. </p>

<p>Au début, fais en sorte que l&#39;ordinateur attaque au pif (yolol). Une fois que tu as ceci de fonctionnel donne-lui de l&#39;IA&nbsp;:</p>

<ul>
<li>Prioriser les coups fatals</li>
<li>S&#39;il n&#39;y a pas de coup fatal disponible, tu peux faire du hasard</li>
</ul>

<p>Et oui, l&#39;intelligence artificielle dans les jeux vidéo (voire même les autres types d&#39;application) se résume bien souvent à ceci&nbsp;! Un exemple très célèbre est Pokémon version Bleu ou Rouge, où les pokémon en face choisissaient leur attaque au hasard, moyennant quelques modifications. Tu pourras trouver plus d&#39;info <a href="http://wiki.pokemonspeedruns.com/index.php/Pok%C3%A9mon_Red/Blue/Yellow_Trainer_AI" rel="nofollow" target="_blank">ici</a>. Donc si on te vend de l&#39;IA, généralement c&#39;est du <code class="prettyprint">if</code>.</p>

<h4>2.4.6. Autre ?</h4>

<p>J&#39;ai donné ces 5 idées, mais libre à toi d&#39;améliorer le jeu comme tu le veux&nbsp;! Tu peux par exemple proposer une deuxième attaque spéciale par classe, afin de diversifier ces dernières.</p>

<h3>2.5. Help ! Par quoi je commence ?</h3>

<p>(cette section te sera utile si tu ne sais pas par quoi commencer)</p>

<p>Le syndrome de la page blanche : très difficile à vaincre, surtout en POO. En effet, si tu vois à peu près comment réparer une roue de voiture ou de vélo, construire une voiture ou un vélo à partir de boulons et de vis est tout de suite bien plus compliqué. Pour continuer cette métaphore, je te propose de te donner un objectif beaucoup plus réalisable : construire un vélo sans frein, sans vitesse, avec juste deux roues et un cadre. À partir de là, il te sera bien plus aisé d&#39;ajouter un système de freins, des vitesses, etc.</p>

<p>C&#39;est d&#39;ailleurs plus ou moins la technique du MVP : construire une version ultra minimaliste de ton app, avant d&#39;ajouter des fonctionnalités au fur et à mesure.</p>

<h4>2.5.1. Un jeu minimaliste, mais fonctionnel !</h4>

<p>Essayons de penser à l&#39;essentiel du jeu. Si l&#39;on enlève tout le gras, à quoi se résume le jeu :</p>

<ul>
<li>un système où des gens se battent</li>
<li>pendant 10 tours, les personnages en vie à la fin gagnent</li>
<li>c&#39;est tout !</li>
</ul>

<p>Et bien ce sera notre but, au début. Commence donc par créer un système où deux <code class="prettyprint">Character</code> vont se battre pendant 10 tours. Le ou les characters en vie à la fin des 10 tours gagnent. Pas de mana, pas d&#39;héritage, pas de blabla, juste un système simple.</p>

<p>Il y a plein de façons de designer cela, mais personnellement, j&#39;aurais fait trois classes :</p>

<ul>
<li><code class="prettyprint">Character</code> : qui sera notre personnage. Il aura un attribut <code class="prettyprint">hp</code> et un attribut <code class="prettyprint">dmg</code>. Puis il pourra attaquer.</li>
<li><code class="prettyprint">Game</code> : qui lance la partie avec <code class="prettyprint">Game.new</code></li>
<li><code class="prettyprint">Turn</code>, qui fera les actions du tour de jeu : les personnages attaquent, etc.</li>
</ul>

<p>Une fois que tu as réussi à faire un système de jeu qui fait des combats entre deux personnages, bravo ! Tu as ton MVP. Ajouter des fonctionnalités sera bien plus aisé, et bien plus gratifiant ! En effet, tu auras l&#39;impression que ton jeu n&#39;est pas hyper intéressant, et tu auras envie d&#39;ajouter des fonctionnalités pour qu&#39;il soit de mieux en mieux.</p>

<p>Et puis tu as battu le syndrome de la page blanche. Et ça, ce n&#39;est pas rien ;)</p>

<h4>2.5.2. Nouvelle fonctionnalité : un troisième personnage</h4>

<p>Maintenant que tu as ton système rudimentaire, nous pouvons construire par-dessus. La première chose à faire sera d&#39;ajouter un troisième personnage dans l&#39;arène, puis de demander à l&#39;utilisateur à chaque attaque de personnage qui se dernier visera.</p>

<p>Je ne te cache pas que ce sera une partie pas forcément très simple, mais tout à fait à ta hauteur :)</p>

<h4>2.5.3. Les autres fonctionnalités</h4>

<p>Et bien maintenant tu as un système qui commence à être ce vers quoi nous tendons, ajoute les fonctionnalités qui te semblent les plus pertinentes. L&#39;ordre est à ton libre arbitre, mais personnellement j&#39;aurais fait :</p>

<ul>
<li>avoir un système complet d&#39;affichage en <code class="prettyprint">console.log</code> du status de jeu, avec des majuscules, emojis, et compagnie. Si tu te sens d&#39;attaque, tu peux même bien ranger ce système dans une classe <code class="prettyprint">Display</code>.</li>
<li>ajouter le <code class="prettyprint">name</code> de nos personnages</li>
<li>passer à 5 personnages</li>
<li>intégrer dans la classe character la notion d&#39;attaque spéciale. Pas de mana au début, juste proposer à l&#39;utilisateur quelle attaque il veut faire : normale ou spéciale</li>
<li>intégrer dans la classe character la notion de mana</li>
<li>intégrer les différents types de characters avec l&#39;héritage. On commence par gérer les spécificités simples (<code class="prettyprint">hp</code>, <code class="prettyprint">mana</code>)</li>
<li>faire les attaques spéciales pour chaque type de character. Faire du plus simple au plus dur</li>
<li>intégrer les notions suivantes et finaliser (quand un personnage en tue un autre, il regagne 10 points de mana, etc.)</li>
<li>Siroter une bière de la victoire</li>
<li>Me frotter les mains devant les prochaines fonctionnalités</li>
</ul>

<h2>3. Rendu attendu</h2>

<p>Le rendu attendu est un dossier contenant un fichier HTML ainsi que plusieurs fichiers JS. Par convention, on fait généralement un fichier JS par classe.</p>

<p>Afin de créer tes personnages, tu peux, au choix, faire soit un formulaire HTML, soit une fonction que tu peux appeler depuis la console. Dans la console, grâce à <code class="prettyprint">Game.watchStats()</code>, tu peux voir à tout moment la liste des personnages vivants ainsi que leurs caractéristiques.</p>

<p>L&#39;utilisateur doit être capable d&#39;ajouter ou non un personnage avant le début de la partie. Ensuite, il peut lancer la partie et jouer tous les personnages un par un. Au bout de 10 tours ou bien quand il ne reste plus qu&#39;un personnage, le personnage avec le plus de points de vie a gagné&nbsp;!</p>
