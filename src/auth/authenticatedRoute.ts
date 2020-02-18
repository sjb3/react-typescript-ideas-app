import { map, Matcher, redirect } from "navi";

interface IContext {
  token: string;
}

export function withAuthentication(matcher: Matcher<{}, IContext>) {
  // to protect routes
  return map((_, context: IContext) =>
    context.token ? matcher : redirect("/login")
  );
}
