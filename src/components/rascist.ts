class RacistArray {
    firstElemType: string;
    arr: any[];
    size: number;

    constructor(initialArray) {
        this.arr = [];
        this.size = 0;

        if (initialArray.length === 0) {
            this.speak("Array is empty. Fill me with your seeds... uhhm I mean elements.");
            return;
        }

        this.firstElemType = typeof initialArray[0];

        for (let item of initialArray) {
            if (typeof item !== this.firstElemType) {
                this.react("Abomination Error: Type mismatch detected. Go back to your country.");
            } else {
                this.arr.push(item);
                this.size++;
            }
        }
    }

    add(newItem) {
        if (typeof newItem !== this.firstElemType) {
            this.react("Abomination Error: You dare try to add a different type? I am a racist array!");
        } else {
            this.arr.push(newItem);
            this.size++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            this.react(`Bruh... index ${index} is out of range. Fix yourself.`);
        } else {
            this.arr.splice(index, 1);
            this.size--;
        }
    }

    getSize() {
        return this.size;
    }

    display() {
        if (this.size === 0) {
            this.speak("Please... fill me with your seeds... I mean, elements.");
        } else {
            this.speak("More... more... more elements, daddy 😩");
            this.arr.forEach((item, i) => {
                console.log(`Element ${i + 1}:`, item);
            });
        }
    }

    react(message) {
        console.log("🛑 " + message);
        this.speak(message);
    }

    speak(message) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.rate = 1.1;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
}

// 👇 Try it out now
const cursedArray = new RacistArray([69, 420, "ayo", true]);

cursedArray.display();       
cursedArray.add(100);       
cursedArray.add("no sir 😭");
cursedArray.remove(4);       