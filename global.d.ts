declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare function describe(name: string, fn: () => void): void;
declare function it(name: string, fn: () => void): void;
declare const expect: any;
