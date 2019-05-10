const barn = {
    id: 'barn',
    title: 'In the barnyard',
    description: `
        You're at a super soft birthday party for one of your pals and the bartender asks what your favorite super soft birthday party activity is. What's your answer?
    `,
    choices: [{
        id: 'horse',
        description: 'Cleary, the horse dressed up as a unicorn.',
        result: `
            You're correct. This is the best answer you could have chosen. The bartender gives yous 5 free shots of GusNBru and 5 Puppers. 
        `,
        puppers: 5,
        gusNbru: 5
    }, {
        id: 'cupcake',
        description: 'The pretty pretty cupcake decoration station, complete with cream cheese icing and sprinkles.',
        result: `
            Bummer, turns out the cream cheese was bad and got you sick. Lost some of the puppers you drank through the mouth there. -_-
        `,
        puppers: -5,
        gusNbru: 0
    }, {
        id: 'fighting',
        description: 'Your favorite part of the party was when that group of bald, surly looking uncles showed up and your buddy beat the pants off the surliest looking one.',
        result: `
            You're a solid stand-up hick and you deserve some whiskey and maybe even a beer or two. Bottoms up, pitter patter.  
        `,
        puppers: 2,
        gusNbru: 3
    }]
};

const quests = [barn];

export default quests;