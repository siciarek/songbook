<?php

$people = [
    'jagger' => [
        'id' => 20,
        'firstName' => 'Mick',
        'lastName' => 'Jagger',
        'description' => 'Mick Jagger',
        'info' => 'Member of The Rolling Stones.',
    ],
    'lennon' => [
        'id' => 10,
        'firstName' => 'John',
        'lastName' => 'Lennon',
        'description' => 'John Lennon',
        'info' => 'Member of The Beatles.',
    ],
    'mccartney' => [
        'id' => 11,
        'firstName' => 'Paul',
        'lastName' => 'Mc Cartney',
        'description' => 'Paul Mc Cartney',
        'info' => 'Member of The Beatles.',
    ],
    'sinatra' => [
        'id' => 1,
        'firstName' => 'Frank',
        'lastName' => 'Sinatra',
        'description' => 'Paul Anka',
        'info' => 'No explenation is required. If you do not know the guy, you are dummbass.',
    ],
    'paulanka' => [
        'id' => 4,
        'firstName' => 'Paul',
        'lastName' => 'Anka',
        'description' => 'Paul Anka',
        'info' => 'Legendary performer of Diana.'
    ],
    'lisaminelli' => [
        'id' => 3,
        'firstName' => 'Lisa',
        'lastName' => 'Minelli',
        'description' => 'Lisa Minelli',
        'info' => 'Daughter of Judy Garland. Great singer and actress. Watch the Cabaret!',
    ],
];

$song = [
    'id' => null,
    'genre' => null,
    'createdAt' => null,
    'title' => null,
    'lyrics' => null,
    'authors' => [],
    'artists' => [],
    'music' => [],
    'videos' => []
];

$songs = [
    [
        'id' => 103,
        'genre' => 'Rock',
        'createdAt' => '1979-10-11 15:10:00',
        'title' => 'Highway To Hell',
        'lyrics' => "
Living easy, living free        
        ",
        'authors' => [],
        'artists' => [],
        'music' => [],
        'videos' => []
    ],
    [
        'id' => 102,
        'genre' => 'Ballad',
        'createdAt' => '1979-10-11 15:10:00',
        'title' => 'Imagine',
        'lyrics' => "Imagine there's no heaven
It's easy if you try
No hell below us
Above us only sky

Imagine all the people
Living for today
Aha-ahh

Imagine there's no countries
It isn't hard to do
Nothing to kill or die for
And no religion too

Imagine all the people
Living life in peace
Yoohoo-ooh

You may say I'm a dreamer
But I'm not the only one
I hope someday you'll join us
And the world will be as one

Imagine no possessions
I wonder if you can
No need for greed or hunger
A brotherhood of man

Imagine all the people
Sharing all the world
Yoohoo-ooh

You may say I'm a dreamer
But I'm not the only one
I hope someday you'll join us
And the world will live as one",
        'authors' => [],
        'artists' => [],
        'music' => [],
        'videos' => []
    ],
    [
        'id' => 101,
        'genre' => 'Rock',
        'createdAt' => '2017-01-01 00:00:00',
        'title' => 'Satisfaction',
        'lyrics' => "I can't get no satisfaction, I can't get no satisfaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm drivin' in my car, and the man come on the radio
He's tellin' me more and more about some useless information
Supposed to fire my imagination
I can't get no, oh, no, no, no, hey, hey, hey
That's what I say

I can't get no satisfaction, I can't get no satisfaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm watchin' my tv and a man comes on and tell me
How white my shirts can be
But, he can't be a man 'cause he doesn't smoke
The same cigarettes as me
I can't get no, oh, no, no, no, hey, hey, hey
That's what I say

I can't get no satisfaction, I can't get girl reaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no
When I'm ridin' round the world
And I'm doin' this and I'm signin' that
And I'm tryin' to make some girl, who tells me
Baby, better come back maybe next week
Can't you see I'm on a losing streak
I can't get no, oh, no, no, no, hey, hey, hey
That's what I say,

I can't get no, I can't get no
I can't get no satisfaction, no satisfaction
No satisfaction, no satisfaction",
        'authors' => [
            $people['jagger'],
        ],
        'artists' => [
            $people['jagger'],
        ],
        'music' => [],
        'videos' => [
            [
                'id' => 600,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=VOgFZfRVaww',
                'artist' => 'John Lennon',
                'info' => 'Official video',
            ],
        ]
    ],
    [
        'id' => 100,
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Ballad',
        'title' => 'Yesterday',
        'authors' => [
            $people['lennon'],
            $people['mccartney'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => "Yesterday all my troubles seemed so far away.
Now it looks as though they're here to stay.
Oh, I believe in yesterday.

Suddenly I'm not half the man I used to be.
There's a shadow hanging over me.
Oh, yesterday came suddenly.

Why she had to go, I don't know, she wouldn't say.
I said something wrong, now I long for yesterday.

Yesterday love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.

Why she had to go, I don't know, she wouldn't say.
I said something wrong, now I long for yesterday.

Yesterday love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.

Mm mm mm mm mm mm mm",
        'music' => [

        ],
        'videos' => [
            [
                'id' => 500,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=haWRUpPw_tI&autoplay=1',
                'artist' => 'The Beatles',
                'info' => 'Live performance',
            ],
            [
                'id' => 501,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=RjpzTys0s9g&autoplay=1',
                'artist' => 'Paul Mc Cartney',
                'info' => 'Live performance',
            ],
        ],
    ],
    [
        'id' => 1,
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Ballad',
        'title' => 'My Way',
        'authors' => [
            $people['paulanka'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => "And now, the end is near
And so I face the final curtain
My friend, I'll say it clear
I'll state my case, of which I'm certain

I've lived a life that's full
I've traveled each and every highway
But more, much more than this
I did it my way

Regrets, I've had a few
But then again, too few to mention
I did what I had to do
And saw it through without exemption

I planned each charted course
Each careful step along the byway
And more, much more than this
I did it my way

Yes, there were times, I'm sure you knew
When I bit off more than I could chew
But through it all, when there was doubt
I ate it up and spit it out
I faced it all and I stood tall
And did it my way

I've loved, I've laughed and cried
I've had my fill my share of losing
And now, as tears subside
I find it all so amusing

To think I did all that
And may I say - not in a shy way
Oh no, oh no, not me
I did it my way

For what is a man, what has he got
If not himself, then he has naught
To say the things he truly feels
And not the words of one who kneels
The record shows I took the blows
And did it my way

Yes, it was my way",
        "music" => [],
        "videos" => [
            [
                'id' => 502,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=FSNidgTKsbE&autoplay=1',
                'artist' => 'Frank Sinatra',
                'info' => 'Live performance'
            ],
        ],
    ],
    [
        'id' => 2,
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Jazz',
        'title' => 'Fly Me To The Moon',
        'authors' => [
            $people['paulanka'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => 'Fly me to the moon
Let me play among the stars
Let me see what spring is like on
A Jupiter and Mars
In other words, hold my hand
In other words, baby, kiss me

Fill my heart with song and let me sing for ever more
You are all I long for
All I worship and adore
In other words, please be true
In other words, I love you',
        "music" => [],
        "videos" => [],
    ],
    [
        'id' => 3,
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Jazz',
        'title' => 'New York, New York',
        'authors' => [
            $people['paulanka'],
        ],
        'artists' => [
            $people['sinatra'],
            $people['lisaminelli'],
        ],
        'lyrics' => "Start spreadin' the news, I'm leavin' today
I want to be a part of it, New York, New York
These vagabond shoes are longing to stray
Right through the very heart of it, New York, New York

I want to wake up in a city that doesn't sleep
And find I'm king of the hill, top of the heap

These little town blues are melting away
I'll make a brand new start of it, in old New York
If I can make it there, I'll make it anywhere
It's up to you , New York, New York

New York, New York
I want to wake up in a city that never sleeps
And find I'm A-number-one, top of the list,
King of the hill, A-number-one

These little town blues are melting away
I'm gonna make a brand new start of it in old New York
A-a-a-nd if I can make it there, I'm gonna make it anywhere
It's up to you, New York, New York

New York",
        "music" => [
            [
                'id' => 332,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=EUrUfJW1JGk&autoplay=1',
                'artist' => 'Frank Sinatra',
                'info' => 'Live performance'
            ],
        ],
        "videos" => [
            [
                'id' => 503,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=xMfz1jlyQrw&autoplay=1',
                'artist' => 'Frank Sinatra',
                'info' => 'Live performance'
            ],
            [
                'id' => 50,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=N8hVOMAmY-s&autoplay=1',
                'artist' => 'Luciano Pavarotti and Lisa Minelli',
                'info' => 'Live performance'
            ]
        ],
    ]
];