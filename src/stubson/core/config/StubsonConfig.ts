import StubsonContext from "../context/StubsonContext";
import StubsonResolver from "../resolver/StubsonResolver";

export default abstract class StubsonConfig {

    init(context: StubsonContext) {

    }

    abstract createResolver(context: StubsonContext): StubsonResolver
    abstract defaultResolver(context: StubsonContext): StubsonResolver

}