module lists {
    const list: ListPtr = {
        data: 1,
        next: {
            data: 2,
            next: {
                data: 3,
                next: null
            }
        }
    }

    type ListPtr = IListNode | null;

    interface IListNode {
        data: number,
        next: ListPtr
    }

    function length(l:ListPtr) {

    }
}