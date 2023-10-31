document.addEventListener("DOMContentLoaded", function() {
    let pairs = [
        {hand: "hand1", pill: "pill1"},
        {hand: "hand2", pill: "pill2"},
        {hand: "hand3", pill: "pill3"},
        {hand: "hand4", pill: "pill4"}
    ];

    let clickedElements = [];

    pairs.forEach(pair => {
        const hand = document.getElementById(pair.hand);
        const pill = document.getElementById(pair.pill);

        hand.addEventListener("click", function() {
            handleClick(hand);
        });

        pill.addEventListener("click", function() {
            handleClick(pill);
        });
    });

    function handleClick(element) {
        if (!clickedElements.includes(element)) {
            clickedElements.push(element);
            element.style.display = "none";
        } else {
            clickedElements = clickedElements.filter(item => item !== element);
            element.style.display = "block";
        }

        if (clickedElements.length === 2) {
            setTimeout(resetClickedElements, 1000);
        }
    }

    function resetClickedElements() {
        if (clickedElements[0].id.slice(-1) === clickedElements[1].id.slice(-1)) {
            pairs = pairs.filter(pair => pair.hand !== clickedElements[0].id && pair.pill !== clickedElements[1].id);
            
        } else {
            clickedElements.forEach(element => {
                element.style.display = "block";
            });
        }
        clickedElements = [];
    }
});