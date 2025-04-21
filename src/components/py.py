class NewArray:
    def __init__(self, arr: list):
        self.arr = []
        self.size = 0

        if not arr:
            print("Array is empty. Fill me with your seeds... uhmm I mean elements.")
            return

        self.firstElemType = type(arr[0])
        for item in arr:
            if type(item) != self.firstElemType:
                print("Abomination Error: array contains different types, I will send you back to your country 🚷")
            else:
                self.arr.append(item)
                self.size += 1

    def Add(self, new_member):
        if type(new_member) != self.firstElemType:
            print("Abomination Error: cannot add value of different type. I am a racist array 😤")
        else:
            self.arr.append(new_member)
            self.size += 1

    def Remove(self, index: int):
        if index < 0 or index >= self.size:
            print(f"you dumb... index {index} is out of range 🤦")
        else:
            self.arr.pop(index)
            self.size -= 1

    def GetSize(self):
        return self.size

if __name__ == "__main__":
    print("Stack frame created...")

    old_array = [0, 1, "error", "34"]
    adv_array = NewArray(old_array)

    for i, elem in enumerate(adv_array.arr):
        print(f"Element {i+1} is", elem)

    if adv_array.GetSize() == 0:
        print("pls, fill me with your seeds... uhhm i mean elements")
    else:
        print("more more more... uhmm elements")
