export default class StubsonPostState {

    static root(element: any) {
        return new StubsonPostState(element, null)
    }

    parent: StubsonPostState
    key: string
    element: any

    private constructor(element: any, key: string) {
        this.element = element
        this.key = key
    }

    child(element: any, key: string) {
        let child = new StubsonPostState(element, key)
        child.parent = this
        return child
    }

}