function getJoke() {
    const jokes_100 = [
      "Why don't programmers like nature? It has too many bugs!",
      "What did the janitor say when he jumped out of the closet? Supplies!",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "Why don't skeletons fight each other? They don't have the guts!",
      "I only know 25 letters of the alphabet. I don't know y.",
      "How does a penguin build its house? Igloos it together!",
      "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "I used to play piano by ear, but now I use my hands and fingers.",
      "Why don't oysters donate to charity? Because they are shellfish!",
      "What did the grape do when it got stepped on? Nothing, it just let out a little wine!",
      "Why did the math book look sad? Because it had too many problems.",
      "I only know 10 jokes about procrastination, but I'll tell you later.",
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
      "Why did the bicycle fall over? Because it was two-tired!",
      "What do you call fake spaghetti? An impasta!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "What do you call a fish wearing a crown? A kingfish!",
      "How do you catch a squirrel? Climb a tree and act like a nut!",
      "What did one hat say to the other? Stay here, I'm going on ahead!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why don't oysters donate to charity? Because they are shellfish!",
      "What did the grape do when it got stepped on? Nothing, it just let out a little wine!",
      "Why did the math book look sad? Because it had too many problems.",
      "I only know 10 jokes about procrastination, but I'll tell you later.",
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
      "What did the bicycle say at the end of the race? I'm two-tired!",
      "Why did the salad go to the fridge? To get dressed!",
      "What do you call a fish that wears a crown? A kingfish!",
      "How do you organize a space party? You planet!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "How do you catch a squirrel? Climb a tree and act like a nut!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "Why did the computer catch a cold? It had too many windows open!",
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
      "Why did the bicycle say at the end of the race? I'm two-tired!",
      "Why did the salad go to the fridge? To get dressed!",
      "What do you call a fish that wears a crown? A kingfish!",
      "How do you organize a space party? You planet!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "How do you catch a squirrel? Climb a tree and act like a nut!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "Why did the computer catch a cold? It had too many windows open!",
      "Why did the programmer quit his job? He didn't get arrays!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
      "Why did the bicycle say at the end of the race? I'm two-tired!",
      "Why did the salad go to the fridge? To get dressed!",
      "What do you call a fish that wears a crown? A kingfish!",
      "How do you organize a space party? You planet!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "How do you catch a squirrel? Climb a tree and act like a nut!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "Why did the computer catch a cold? It had too many windows open!",
      "Why did the programmer quit his job? He didn't get arrays!",
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
      "Why did the bicycle say at the end of the race? I'm two-tired!",
      "Why did the salad go to the fridge? To get dressed!",
      "What do you call a fish that wears a crown? A kingfish!",
      "How do you organize a space party? You planet!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "How do you catch a squirrel? Climb a tree and act like a nut!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "Why did the computer catch a cold? It had too many windows open!",
      "Why did the programmer quit his job? He didn't get arrays!",
      "Why did the JavaScript developer go broke? Because he lost his `float`!",
      "Why did the HTML element apply for a job? It wanted to be `div`ersified!",
      "What do you call a group of musical whales? An orca-stra!",
      "How does a computer catch fish? With its `net`!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
      "Why did the bicycle say at the end of the race? I'm two-tired!",
      "Why did the salad go to the fridge? To get dressed!",
      "What do you call a fish that wears a crown? A kingfish!",
      "How do you organize a space party? You planet!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "How do you catch a squirrel? Climb a tree and act like a nut!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "Why did the computer catch a cold? It had too many windows open!",
      "Why did the programmer quit his job? He didn't get arrays!",
      "Why did the JavaScript developer go broke? Because he lost his `float`!",
      "Why did the HTML element apply for a job? It wanted to be `div`ersified!",
      "What do you call a group of musical whales? An orca-stra!",
      "How does a computer catch fish? With its `net`!",
      "Why did the programmer quit his job? He didn't get arrays!",
      "Why did the JavaScript developer go broke? Because he lost his `float`!",
      "Why did the HTML element apply for a job? It wanted to be `div`ersified!",
      "What do you call a group of musical whales? An orca-stra!",
      "How does a computer catch fish? With its `net`!"
    ];
  
    let num = Math.floor(Math.random()*100)
    document.getElementById("jokeDisplay").innerHTML = jokes_100[num]
}