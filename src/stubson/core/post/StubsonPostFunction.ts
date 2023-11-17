import StubsonPostState from "./StubsonPostState";

export default abstract class StubsonPostFunction {
    abstract execute(state: StubsonPostState): any
}