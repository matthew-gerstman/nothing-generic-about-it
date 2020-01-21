type LinkedList<T> = T & { next: LinkedList<T> };
type PersonList = LinkedList<Person>;
let people: PersonList;

people.next.next.next.clothes;

type BinaryTree<T> = T & {
	leftChild: BinaryTree<T>;
	rightChild: BinaryTree<T>;
};

type PersonTree = BinaryTree<Person>;
let personTree: PersonTree;
personTree.leftChild.rightChild.leftChild.rightChild;
