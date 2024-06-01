// Manual type variations

interface Options {
  material: string;
  backlight: boolean;
}

// Manually created readonly interface
interface ManualReadOnlyOptions {
  readonly material: string;
  readonly backlight: boolean;
}

// Manually created optional interface
interface ManualOptionalOptions {
  material?: string;
  backlight?: string
}

// Manually created nullable interface
interface ManualNullableOptions {
  material: string | null;
  backlight: string | null;
}

// Mapped types
type ReadOnly<T> = { readonly [k in keyof T]: T[k]; }
type Optional<T> = { [k in keyof T]?: T[k]; }
type Nullable<T> = { [k in keyof T]: T[k] | null; }

// Creating new types from mapped types
type ReadonlyOptions = Readonly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

// Using mapped types

// Read-only type
const options1: ReadonlyOptions = {
  backlight: true,
  material: 'plastic'
};

// Error. Property is read-only
// options1.backlight = false;

// Optional type
const options2: OptionalOptions = {
  // All members are optional
};

// Nullable type
const options3: NullableOptions = {
  backlight: null,
  material: null
};


console.log('Options 1:', options1);
console.log('Options 2:', options2);
console.log('Options 3:', options3);
