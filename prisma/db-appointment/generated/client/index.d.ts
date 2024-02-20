
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FilledForm
 * 
 */
export type FilledForm = $Result.DefaultSelection<Prisma.$FilledFormPayload>
/**
 * Model BookedService
 * 
 */
export type BookedService = $Result.DefaultSelection<Prisma.$BookedServicePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model FormsForService
 * 
 */
export type FormsForService = $Result.DefaultSelection<Prisma.$FormsForServicePayload>
/**
 * Model ServiceRequirement
 * 
 */
export type ServiceRequirement = $Result.DefaultSelection<Prisma.$ServiceRequirementPayload>
/**
 * Model ServiceRequirementTranslation
 * 
 */
export type ServiceRequirementTranslation = $Result.DefaultSelection<Prisma.$ServiceRequirementTranslationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Forms
 * const forms = await prisma.form.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Forms
   * const forms = await prisma.form.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs>;

  /**
   * `prisma.filledForm`: Exposes CRUD operations for the **FilledForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilledForms
    * const filledForms = await prisma.filledForm.findMany()
    * ```
    */
  get filledForm(): Prisma.FilledFormDelegate<ExtArgs>;

  /**
   * `prisma.bookedService`: Exposes CRUD operations for the **BookedService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookedServices
    * const bookedServices = await prisma.bookedService.findMany()
    * ```
    */
  get bookedService(): Prisma.BookedServiceDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.formsForService`: Exposes CRUD operations for the **FormsForService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormsForServices
    * const formsForServices = await prisma.formsForService.findMany()
    * ```
    */
  get formsForService(): Prisma.FormsForServiceDelegate<ExtArgs>;

  /**
   * `prisma.serviceRequirement`: Exposes CRUD operations for the **ServiceRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequirements
    * const serviceRequirements = await prisma.serviceRequirement.findMany()
    * ```
    */
  get serviceRequirement(): Prisma.ServiceRequirementDelegate<ExtArgs>;

  /**
   * `prisma.serviceRequirementTranslation`: Exposes CRUD operations for the **ServiceRequirementTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequirementTranslations
    * const serviceRequirementTranslations = await prisma.serviceRequirementTranslation.findMany()
    * ```
    */
  get serviceRequirementTranslation(): Prisma.ServiceRequirementTranslationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.0
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Form: 'Form',
    FilledForm: 'FilledForm',
    BookedService: 'BookedService',
    Service: 'Service',
    Category: 'Category',
    FormsForService: 'FormsForService',
    ServiceRequirement: 'ServiceRequirement',
    ServiceRequirementTranslation: 'ServiceRequirementTranslation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'form' | 'filledForm' | 'bookedService' | 'service' | 'category' | 'formsForService' | 'serviceRequirement' | 'serviceRequirementTranslation'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>,
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FilledForm: {
        payload: Prisma.$FilledFormPayload<ExtArgs>
        fields: Prisma.FilledFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilledFormFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilledFormFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>
          }
          findFirst: {
            args: Prisma.FilledFormFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilledFormFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>
          }
          findMany: {
            args: Prisma.FilledFormFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>[]
          }
          create: {
            args: Prisma.FilledFormCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>
          }
          createMany: {
            args: Prisma.FilledFormCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FilledFormDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>
          }
          update: {
            args: Prisma.FilledFormUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>
          }
          deleteMany: {
            args: Prisma.FilledFormDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FilledFormUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FilledFormUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilledFormPayload>
          }
          aggregate: {
            args: Prisma.FilledFormAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFilledForm>
          }
          groupBy: {
            args: Prisma.FilledFormGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FilledFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilledFormCountArgs<ExtArgs>,
            result: $Utils.Optional<FilledFormCountAggregateOutputType> | number
          }
        }
      }
      BookedService: {
        payload: Prisma.$BookedServicePayload<ExtArgs>
        fields: Prisma.BookedServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookedServiceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookedServiceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>
          }
          findFirst: {
            args: Prisma.BookedServiceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookedServiceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>
          }
          findMany: {
            args: Prisma.BookedServiceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>[]
          }
          create: {
            args: Prisma.BookedServiceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>
          }
          createMany: {
            args: Prisma.BookedServiceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookedServiceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>
          }
          update: {
            args: Prisma.BookedServiceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>
          }
          deleteMany: {
            args: Prisma.BookedServiceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookedServiceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookedServiceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookedServicePayload>
          }
          aggregate: {
            args: Prisma.BookedServiceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookedService>
          }
          groupBy: {
            args: Prisma.BookedServiceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookedServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookedServiceCountArgs<ExtArgs>,
            result: $Utils.Optional<BookedServiceCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>,
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      FormsForService: {
        payload: Prisma.$FormsForServicePayload<ExtArgs>
        fields: Prisma.FormsForServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormsForServiceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormsForServiceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>
          }
          findFirst: {
            args: Prisma.FormsForServiceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormsForServiceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>
          }
          findMany: {
            args: Prisma.FormsForServiceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>[]
          }
          create: {
            args: Prisma.FormsForServiceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>
          }
          createMany: {
            args: Prisma.FormsForServiceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FormsForServiceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>
          }
          update: {
            args: Prisma.FormsForServiceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>
          }
          deleteMany: {
            args: Prisma.FormsForServiceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FormsForServiceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FormsForServiceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormsForServicePayload>
          }
          aggregate: {
            args: Prisma.FormsForServiceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFormsForService>
          }
          groupBy: {
            args: Prisma.FormsForServiceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormsForServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormsForServiceCountArgs<ExtArgs>,
            result: $Utils.Optional<FormsForServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequirement: {
        payload: Prisma.$ServiceRequirementPayload<ExtArgs>
        fields: Prisma.ServiceRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequirementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequirementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>
          }
          findFirst: {
            args: Prisma.ServiceRequirementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequirementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>
          }
          findMany: {
            args: Prisma.ServiceRequirementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>[]
          }
          create: {
            args: Prisma.ServiceRequirementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>
          }
          createMany: {
            args: Prisma.ServiceRequirementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServiceRequirementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>
          }
          update: {
            args: Prisma.ServiceRequirementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequirementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequirementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServiceRequirementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementPayload>
          }
          aggregate: {
            args: Prisma.ServiceRequirementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServiceRequirement>
          }
          groupBy: {
            args: Prisma.ServiceRequirementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServiceRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequirementCountArgs<ExtArgs>,
            result: $Utils.Optional<ServiceRequirementCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequirementTranslation: {
        payload: Prisma.$ServiceRequirementTranslationPayload<ExtArgs>
        fields: Prisma.ServiceRequirementTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequirementTranslationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequirementTranslationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>
          }
          findFirst: {
            args: Prisma.ServiceRequirementTranslationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequirementTranslationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>
          }
          findMany: {
            args: Prisma.ServiceRequirementTranslationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>[]
          }
          create: {
            args: Prisma.ServiceRequirementTranslationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>
          }
          createMany: {
            args: Prisma.ServiceRequirementTranslationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ServiceRequirementTranslationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>
          }
          update: {
            args: Prisma.ServiceRequirementTranslationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequirementTranslationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequirementTranslationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ServiceRequirementTranslationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ServiceRequirementTranslationPayload>
          }
          aggregate: {
            args: Prisma.ServiceRequirementTranslationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateServiceRequirementTranslation>
          }
          groupBy: {
            args: Prisma.ServiceRequirementTranslationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ServiceRequirementTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequirementTranslationCountArgs<ExtArgs>,
            result: $Utils.Optional<ServiceRequirementTranslationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    FilledForm: number
    FormsForService: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FilledForm?: boolean | FormCountOutputTypeCountFilledFormArgs
    FormsForService?: boolean | FormCountOutputTypeCountFormsForServiceArgs
  }

  // Custom InputTypes

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountFilledFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilledFormWhereInput
  }


  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountFormsForServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormsForServiceWhereInput
  }



  /**
   * Count Type BookedServiceCountOutputType
   */

  export type BookedServiceCountOutputType = {
    FilledForm: number
  }

  export type BookedServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FilledForm?: boolean | BookedServiceCountOutputTypeCountFilledFormArgs
  }

  // Custom InputTypes

  /**
   * BookedServiceCountOutputType without action
   */
  export type BookedServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedServiceCountOutputType
     */
    select?: BookedServiceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BookedServiceCountOutputType without action
   */
  export type BookedServiceCountOutputTypeCountFilledFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilledFormWhereInput
  }



  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    ServiceRequirement: number
    BookedService: number
    FormsForService: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ServiceRequirement?: boolean | ServiceCountOutputTypeCountServiceRequirementArgs
    BookedService?: boolean | ServiceCountOutputTypeCountBookedServiceArgs
    FormsForService?: boolean | ServiceCountOutputTypeCountFormsForServiceArgs
  }

  // Custom InputTypes

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountServiceRequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequirementWhereInput
  }


  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookedServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookedServiceWhereInput
  }


  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFormsForServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormsForServiceWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    services: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | CategoryCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }



  /**
   * Count Type ServiceRequirementCountOutputType
   */

  export type ServiceRequirementCountOutputType = {
    ServiceRequirementTranslation: number
  }

  export type ServiceRequirementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ServiceRequirementTranslation?: boolean | ServiceRequirementCountOutputTypeCountServiceRequirementTranslationArgs
  }

  // Custom InputTypes

  /**
   * ServiceRequirementCountOutputType without action
   */
  export type ServiceRequirementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementCountOutputType
     */
    select?: ServiceRequirementCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ServiceRequirementCountOutputType without action
   */
  export type ServiceRequirementCountOutputTypeCountServiceRequirementTranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequirementTranslationWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    FilledForm?: boolean | Form$FilledFormArgs<ExtArgs>
    FormsForService?: boolean | Form$FormsForServiceArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FilledForm?: boolean | Form$FilledFormArgs<ExtArgs>
    FormsForService?: boolean | Form$FormsForServiceArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      FilledForm: Prisma.$FilledFormPayload<ExtArgs>[]
      FormsForService: Prisma.$FormsForServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["form"]>
    composites: {}
  }


  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Form that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
    **/
    create<T extends FormCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FormCreateArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Forms.
     *     @param {FormCreateManyArgs} args - Arguments to create many Forms.
     *     @example
     *     // Create many Forms
     *     const form = await prisma.form.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
    **/
    delete<T extends FormDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FormDeleteArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FormUpdateArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
    **/
    upsert<T extends FormUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FormUpsertArgs<ExtArgs>>
    ): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    FilledForm<T extends Form$FilledFormArgs<ExtArgs> = {}>(args?: Subset<T, Form$FilledFormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findMany'> | Null>;

    FormsForService<T extends Form$FormsForServiceArgs<ExtArgs> = {}>(args?: Subset<T, Form$FormsForServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Form model
   */ 
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly name: FieldRef<"Form", 'String'>
    readonly description: FieldRef<"Form", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }


  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }


  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }


  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }


  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
  }


  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }


  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }


  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
  }


  /**
   * Form.FilledForm
   */
  export type Form$FilledFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    where?: FilledFormWhereInput
    orderBy?: FilledFormOrderByWithRelationInput | FilledFormOrderByWithRelationInput[]
    cursor?: FilledFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilledFormScalarFieldEnum | FilledFormScalarFieldEnum[]
  }


  /**
   * Form.FormsForService
   */
  export type Form$FormsForServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    where?: FormsForServiceWhereInput
    orderBy?: FormsForServiceOrderByWithRelationInput | FormsForServiceOrderByWithRelationInput[]
    cursor?: FormsForServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormsForServiceScalarFieldEnum | FormsForServiceScalarFieldEnum[]
  }


  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormInclude<ExtArgs> | null
  }



  /**
   * Model FilledForm
   */

  export type AggregateFilledForm = {
    _count: FilledFormCountAggregateOutputType | null
    _min: FilledFormMinAggregateOutputType | null
    _max: FilledFormMaxAggregateOutputType | null
  }

  export type FilledFormMinAggregateOutputType = {
    id: string | null
    formId: string | null
    bookedServiceId: string | null
    status: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilledFormMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    bookedServiceId: string | null
    status: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilledFormCountAggregateOutputType = {
    id: number
    formId: number
    bookedServiceId: number
    formDataJson: number
    status: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FilledFormMinAggregateInputType = {
    id?: true
    formId?: true
    bookedServiceId?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilledFormMaxAggregateInputType = {
    id?: true
    formId?: true
    bookedServiceId?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilledFormCountAggregateInputType = {
    id?: true
    formId?: true
    bookedServiceId?: true
    formDataJson?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FilledFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilledForm to aggregate.
     */
    where?: FilledFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilledForms to fetch.
     */
    orderBy?: FilledFormOrderByWithRelationInput | FilledFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilledFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilledForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilledForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilledForms
    **/
    _count?: true | FilledFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilledFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilledFormMaxAggregateInputType
  }

  export type GetFilledFormAggregateType<T extends FilledFormAggregateArgs> = {
        [P in keyof T & keyof AggregateFilledForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilledForm[P]>
      : GetScalarType<T[P], AggregateFilledForm[P]>
  }




  export type FilledFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilledFormWhereInput
    orderBy?: FilledFormOrderByWithAggregationInput | FilledFormOrderByWithAggregationInput[]
    by: FilledFormScalarFieldEnum[] | FilledFormScalarFieldEnum
    having?: FilledFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilledFormCountAggregateInputType | true
    _min?: FilledFormMinAggregateInputType
    _max?: FilledFormMaxAggregateInputType
  }

  export type FilledFormGroupByOutputType = {
    id: string
    formId: string
    bookedServiceId: string
    formDataJson: JsonValue
    status: string
    createdBy: string
    createdAt: Date
    updatedAt: Date | null
    _count: FilledFormCountAggregateOutputType | null
    _min: FilledFormMinAggregateOutputType | null
    _max: FilledFormMaxAggregateOutputType | null
  }

  type GetFilledFormGroupByPayload<T extends FilledFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilledFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilledFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilledFormGroupByOutputType[P]>
            : GetScalarType<T[P], FilledFormGroupByOutputType[P]>
        }
      >
    >


  export type FilledFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    bookedServiceId?: boolean
    formDataJson?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookedService?: boolean | BookedServiceDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filledForm"]>

  export type FilledFormSelectScalar = {
    id?: boolean
    formId?: boolean
    bookedServiceId?: boolean
    formDataJson?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FilledFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookedService?: boolean | BookedServiceDefaultArgs<ExtArgs>
    form?: boolean | FormDefaultArgs<ExtArgs>
  }


  export type $FilledFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilledForm"
    objects: {
      bookedService: Prisma.$BookedServicePayload<ExtArgs>
      form: Prisma.$FormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      bookedServiceId: string
      formDataJson: Prisma.JsonValue
      status: string
      createdBy: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["filledForm"]>
    composites: {}
  }


  type FilledFormGetPayload<S extends boolean | null | undefined | FilledFormDefaultArgs> = $Result.GetResult<Prisma.$FilledFormPayload, S>

  type FilledFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FilledFormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FilledFormCountAggregateInputType | true
    }

  export interface FilledFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilledForm'], meta: { name: 'FilledForm' } }
    /**
     * Find zero or one FilledForm that matches the filter.
     * @param {FilledFormFindUniqueArgs} args - Arguments to find a FilledForm
     * @example
     * // Get one FilledForm
     * const filledForm = await prisma.filledForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FilledFormFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FilledFormFindUniqueArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FilledForm that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FilledFormFindUniqueOrThrowArgs} args - Arguments to find a FilledForm
     * @example
     * // Get one FilledForm
     * const filledForm = await prisma.filledForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FilledFormFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FilledFormFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FilledForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormFindFirstArgs} args - Arguments to find a FilledForm
     * @example
     * // Get one FilledForm
     * const filledForm = await prisma.filledForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FilledFormFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FilledFormFindFirstArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FilledForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormFindFirstOrThrowArgs} args - Arguments to find a FilledForm
     * @example
     * // Get one FilledForm
     * const filledForm = await prisma.filledForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FilledFormFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FilledFormFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FilledForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilledForms
     * const filledForms = await prisma.filledForm.findMany()
     * 
     * // Get first 10 FilledForms
     * const filledForms = await prisma.filledForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filledFormWithIdOnly = await prisma.filledForm.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FilledFormFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FilledFormFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FilledForm.
     * @param {FilledFormCreateArgs} args - Arguments to create a FilledForm.
     * @example
     * // Create one FilledForm
     * const FilledForm = await prisma.filledForm.create({
     *   data: {
     *     // ... data to create a FilledForm
     *   }
     * })
     * 
    **/
    create<T extends FilledFormCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FilledFormCreateArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FilledForms.
     *     @param {FilledFormCreateManyArgs} args - Arguments to create many FilledForms.
     *     @example
     *     // Create many FilledForms
     *     const filledForm = await prisma.filledForm.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FilledFormCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FilledFormCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FilledForm.
     * @param {FilledFormDeleteArgs} args - Arguments to delete one FilledForm.
     * @example
     * // Delete one FilledForm
     * const FilledForm = await prisma.filledForm.delete({
     *   where: {
     *     // ... filter to delete one FilledForm
     *   }
     * })
     * 
    **/
    delete<T extends FilledFormDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FilledFormDeleteArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FilledForm.
     * @param {FilledFormUpdateArgs} args - Arguments to update one FilledForm.
     * @example
     * // Update one FilledForm
     * const filledForm = await prisma.filledForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FilledFormUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FilledFormUpdateArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FilledForms.
     * @param {FilledFormDeleteManyArgs} args - Arguments to filter FilledForms to delete.
     * @example
     * // Delete a few FilledForms
     * const { count } = await prisma.filledForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FilledFormDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FilledFormDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilledForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilledForms
     * const filledForm = await prisma.filledForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FilledFormUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FilledFormUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FilledForm.
     * @param {FilledFormUpsertArgs} args - Arguments to update or create a FilledForm.
     * @example
     * // Update or create a FilledForm
     * const filledForm = await prisma.filledForm.upsert({
     *   create: {
     *     // ... data to create a FilledForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilledForm we want to update
     *   }
     * })
    **/
    upsert<T extends FilledFormUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FilledFormUpsertArgs<ExtArgs>>
    ): Prisma__FilledFormClient<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FilledForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormCountArgs} args - Arguments to filter FilledForms to count.
     * @example
     * // Count the number of FilledForms
     * const count = await prisma.filledForm.count({
     *   where: {
     *     // ... the filter for the FilledForms we want to count
     *   }
     * })
    **/
    count<T extends FilledFormCountArgs>(
      args?: Subset<T, FilledFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilledFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilledForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilledFormAggregateArgs>(args: Subset<T, FilledFormAggregateArgs>): Prisma.PrismaPromise<GetFilledFormAggregateType<T>>

    /**
     * Group by FilledForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilledFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilledFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilledFormGroupByArgs['orderBy'] }
        : { orderBy?: FilledFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilledFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilledFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilledForm model
   */
  readonly fields: FilledFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilledForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilledFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bookedService<T extends BookedServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookedServiceDefaultArgs<ExtArgs>>): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FilledForm model
   */ 
  interface FilledFormFieldRefs {
    readonly id: FieldRef<"FilledForm", 'String'>
    readonly formId: FieldRef<"FilledForm", 'String'>
    readonly bookedServiceId: FieldRef<"FilledForm", 'String'>
    readonly formDataJson: FieldRef<"FilledForm", 'Json'>
    readonly status: FieldRef<"FilledForm", 'String'>
    readonly createdBy: FieldRef<"FilledForm", 'String'>
    readonly createdAt: FieldRef<"FilledForm", 'DateTime'>
    readonly updatedAt: FieldRef<"FilledForm", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * FilledForm findUnique
   */
  export type FilledFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * Filter, which FilledForm to fetch.
     */
    where: FilledFormWhereUniqueInput
  }


  /**
   * FilledForm findUniqueOrThrow
   */
  export type FilledFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * Filter, which FilledForm to fetch.
     */
    where: FilledFormWhereUniqueInput
  }


  /**
   * FilledForm findFirst
   */
  export type FilledFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * Filter, which FilledForm to fetch.
     */
    where?: FilledFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilledForms to fetch.
     */
    orderBy?: FilledFormOrderByWithRelationInput | FilledFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilledForms.
     */
    cursor?: FilledFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilledForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilledForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilledForms.
     */
    distinct?: FilledFormScalarFieldEnum | FilledFormScalarFieldEnum[]
  }


  /**
   * FilledForm findFirstOrThrow
   */
  export type FilledFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * Filter, which FilledForm to fetch.
     */
    where?: FilledFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilledForms to fetch.
     */
    orderBy?: FilledFormOrderByWithRelationInput | FilledFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilledForms.
     */
    cursor?: FilledFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilledForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilledForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilledForms.
     */
    distinct?: FilledFormScalarFieldEnum | FilledFormScalarFieldEnum[]
  }


  /**
   * FilledForm findMany
   */
  export type FilledFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * Filter, which FilledForms to fetch.
     */
    where?: FilledFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilledForms to fetch.
     */
    orderBy?: FilledFormOrderByWithRelationInput | FilledFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilledForms.
     */
    cursor?: FilledFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilledForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilledForms.
     */
    skip?: number
    distinct?: FilledFormScalarFieldEnum | FilledFormScalarFieldEnum[]
  }


  /**
   * FilledForm create
   */
  export type FilledFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * The data needed to create a FilledForm.
     */
    data: XOR<FilledFormCreateInput, FilledFormUncheckedCreateInput>
  }


  /**
   * FilledForm createMany
   */
  export type FilledFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilledForms.
     */
    data: FilledFormCreateManyInput | FilledFormCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FilledForm update
   */
  export type FilledFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * The data needed to update a FilledForm.
     */
    data: XOR<FilledFormUpdateInput, FilledFormUncheckedUpdateInput>
    /**
     * Choose, which FilledForm to update.
     */
    where: FilledFormWhereUniqueInput
  }


  /**
   * FilledForm updateMany
   */
  export type FilledFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilledForms.
     */
    data: XOR<FilledFormUpdateManyMutationInput, FilledFormUncheckedUpdateManyInput>
    /**
     * Filter which FilledForms to update
     */
    where?: FilledFormWhereInput
  }


  /**
   * FilledForm upsert
   */
  export type FilledFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * The filter to search for the FilledForm to update in case it exists.
     */
    where: FilledFormWhereUniqueInput
    /**
     * In case the FilledForm found by the `where` argument doesn't exist, create a new FilledForm with this data.
     */
    create: XOR<FilledFormCreateInput, FilledFormUncheckedCreateInput>
    /**
     * In case the FilledForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilledFormUpdateInput, FilledFormUncheckedUpdateInput>
  }


  /**
   * FilledForm delete
   */
  export type FilledFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    /**
     * Filter which FilledForm to delete.
     */
    where: FilledFormWhereUniqueInput
  }


  /**
   * FilledForm deleteMany
   */
  export type FilledFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilledForms to delete
     */
    where?: FilledFormWhereInput
  }


  /**
   * FilledForm without action
   */
  export type FilledFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
  }



  /**
   * Model BookedService
   */

  export type AggregateBookedService = {
    _count: BookedServiceCountAggregateOutputType | null
    _min: BookedServiceMinAggregateOutputType | null
    _max: BookedServiceMaxAggregateOutputType | null
  }

  export type BookedServiceMinAggregateOutputType = {
    id: string | null
    code: string | null
    appointmentDate: Date | null
    serviceId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookedServiceMaxAggregateOutputType = {
    id: string | null
    code: string | null
    appointmentDate: Date | null
    serviceId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookedServiceCountAggregateOutputType = {
    id: number
    code: number
    appointmentDate: number
    serviceId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookedServiceMinAggregateInputType = {
    id?: true
    code?: true
    appointmentDate?: true
    serviceId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookedServiceMaxAggregateInputType = {
    id?: true
    code?: true
    appointmentDate?: true
    serviceId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookedServiceCountAggregateInputType = {
    id?: true
    code?: true
    appointmentDate?: true
    serviceId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookedServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookedService to aggregate.
     */
    where?: BookedServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookedServices to fetch.
     */
    orderBy?: BookedServiceOrderByWithRelationInput | BookedServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookedServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookedServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookedServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookedServices
    **/
    _count?: true | BookedServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookedServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookedServiceMaxAggregateInputType
  }

  export type GetBookedServiceAggregateType<T extends BookedServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBookedService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookedService[P]>
      : GetScalarType<T[P], AggregateBookedService[P]>
  }




  export type BookedServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookedServiceWhereInput
    orderBy?: BookedServiceOrderByWithAggregationInput | BookedServiceOrderByWithAggregationInput[]
    by: BookedServiceScalarFieldEnum[] | BookedServiceScalarFieldEnum
    having?: BookedServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookedServiceCountAggregateInputType | true
    _min?: BookedServiceMinAggregateInputType
    _max?: BookedServiceMaxAggregateInputType
  }

  export type BookedServiceGroupByOutputType = {
    id: string
    code: string | null
    appointmentDate: Date | null
    serviceId: string
    createdBy: string
    createdAt: Date
    updatedAt: Date | null
    _count: BookedServiceCountAggregateOutputType | null
    _min: BookedServiceMinAggregateOutputType | null
    _max: BookedServiceMaxAggregateOutputType | null
  }

  type GetBookedServiceGroupByPayload<T extends BookedServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookedServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookedServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookedServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BookedServiceGroupByOutputType[P]>
        }
      >
    >


  export type BookedServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    appointmentDate?: boolean
    serviceId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    FilledForm?: boolean | BookedService$FilledFormArgs<ExtArgs>
    _count?: boolean | BookedServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookedService"]>

  export type BookedServiceSelectScalar = {
    id?: boolean
    code?: boolean
    appointmentDate?: boolean
    serviceId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookedServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    FilledForm?: boolean | BookedService$FilledFormArgs<ExtArgs>
    _count?: boolean | BookedServiceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BookedServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookedService"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      FilledForm: Prisma.$FilledFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string | null
      appointmentDate: Date | null
      serviceId: string
      createdBy: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["bookedService"]>
    composites: {}
  }


  type BookedServiceGetPayload<S extends boolean | null | undefined | BookedServiceDefaultArgs> = $Result.GetResult<Prisma.$BookedServicePayload, S>

  type BookedServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookedServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookedServiceCountAggregateInputType | true
    }

  export interface BookedServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookedService'], meta: { name: 'BookedService' } }
    /**
     * Find zero or one BookedService that matches the filter.
     * @param {BookedServiceFindUniqueArgs} args - Arguments to find a BookedService
     * @example
     * // Get one BookedService
     * const bookedService = await prisma.bookedService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookedServiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookedServiceFindUniqueArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BookedService that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookedServiceFindUniqueOrThrowArgs} args - Arguments to find a BookedService
     * @example
     * // Get one BookedService
     * const bookedService = await prisma.bookedService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookedServiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookedServiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BookedService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceFindFirstArgs} args - Arguments to find a BookedService
     * @example
     * // Get one BookedService
     * const bookedService = await prisma.bookedService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookedServiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookedServiceFindFirstArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BookedService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceFindFirstOrThrowArgs} args - Arguments to find a BookedService
     * @example
     * // Get one BookedService
     * const bookedService = await prisma.bookedService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookedServiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookedServiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BookedServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookedServices
     * const bookedServices = await prisma.bookedService.findMany()
     * 
     * // Get first 10 BookedServices
     * const bookedServices = await prisma.bookedService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookedServiceWithIdOnly = await prisma.bookedService.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BookedServiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookedServiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BookedService.
     * @param {BookedServiceCreateArgs} args - Arguments to create a BookedService.
     * @example
     * // Create one BookedService
     * const BookedService = await prisma.bookedService.create({
     *   data: {
     *     // ... data to create a BookedService
     *   }
     * })
     * 
    **/
    create<T extends BookedServiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookedServiceCreateArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BookedServices.
     *     @param {BookedServiceCreateManyArgs} args - Arguments to create many BookedServices.
     *     @example
     *     // Create many BookedServices
     *     const bookedService = await prisma.bookedService.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookedServiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookedServiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookedService.
     * @param {BookedServiceDeleteArgs} args - Arguments to delete one BookedService.
     * @example
     * // Delete one BookedService
     * const BookedService = await prisma.bookedService.delete({
     *   where: {
     *     // ... filter to delete one BookedService
     *   }
     * })
     * 
    **/
    delete<T extends BookedServiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookedServiceDeleteArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BookedService.
     * @param {BookedServiceUpdateArgs} args - Arguments to update one BookedService.
     * @example
     * // Update one BookedService
     * const bookedService = await prisma.bookedService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookedServiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookedServiceUpdateArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BookedServices.
     * @param {BookedServiceDeleteManyArgs} args - Arguments to filter BookedServices to delete.
     * @example
     * // Delete a few BookedServices
     * const { count } = await prisma.bookedService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookedServiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookedServiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookedServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookedServices
     * const bookedService = await prisma.bookedService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookedServiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookedServiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookedService.
     * @param {BookedServiceUpsertArgs} args - Arguments to update or create a BookedService.
     * @example
     * // Update or create a BookedService
     * const bookedService = await prisma.bookedService.upsert({
     *   create: {
     *     // ... data to create a BookedService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookedService we want to update
     *   }
     * })
    **/
    upsert<T extends BookedServiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookedServiceUpsertArgs<ExtArgs>>
    ): Prisma__BookedServiceClient<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BookedServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceCountArgs} args - Arguments to filter BookedServices to count.
     * @example
     * // Count the number of BookedServices
     * const count = await prisma.bookedService.count({
     *   where: {
     *     // ... the filter for the BookedServices we want to count
     *   }
     * })
    **/
    count<T extends BookedServiceCountArgs>(
      args?: Subset<T, BookedServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookedServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookedService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookedServiceAggregateArgs>(args: Subset<T, BookedServiceAggregateArgs>): Prisma.PrismaPromise<GetBookedServiceAggregateType<T>>

    /**
     * Group by BookedService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookedServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookedServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookedServiceGroupByArgs['orderBy'] }
        : { orderBy?: BookedServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookedServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookedServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookedService model
   */
  readonly fields: BookedServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookedService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookedServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    FilledForm<T extends BookedService$FilledFormArgs<ExtArgs> = {}>(args?: Subset<T, BookedService$FilledFormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilledFormPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BookedService model
   */ 
  interface BookedServiceFieldRefs {
    readonly id: FieldRef<"BookedService", 'String'>
    readonly code: FieldRef<"BookedService", 'String'>
    readonly appointmentDate: FieldRef<"BookedService", 'DateTime'>
    readonly serviceId: FieldRef<"BookedService", 'String'>
    readonly createdBy: FieldRef<"BookedService", 'String'>
    readonly createdAt: FieldRef<"BookedService", 'DateTime'>
    readonly updatedAt: FieldRef<"BookedService", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BookedService findUnique
   */
  export type BookedServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookedService to fetch.
     */
    where: BookedServiceWhereUniqueInput
  }


  /**
   * BookedService findUniqueOrThrow
   */
  export type BookedServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookedService to fetch.
     */
    where: BookedServiceWhereUniqueInput
  }


  /**
   * BookedService findFirst
   */
  export type BookedServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookedService to fetch.
     */
    where?: BookedServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookedServices to fetch.
     */
    orderBy?: BookedServiceOrderByWithRelationInput | BookedServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookedServices.
     */
    cursor?: BookedServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookedServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookedServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookedServices.
     */
    distinct?: BookedServiceScalarFieldEnum | BookedServiceScalarFieldEnum[]
  }


  /**
   * BookedService findFirstOrThrow
   */
  export type BookedServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookedService to fetch.
     */
    where?: BookedServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookedServices to fetch.
     */
    orderBy?: BookedServiceOrderByWithRelationInput | BookedServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookedServices.
     */
    cursor?: BookedServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookedServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookedServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookedServices.
     */
    distinct?: BookedServiceScalarFieldEnum | BookedServiceScalarFieldEnum[]
  }


  /**
   * BookedService findMany
   */
  export type BookedServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * Filter, which BookedServices to fetch.
     */
    where?: BookedServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookedServices to fetch.
     */
    orderBy?: BookedServiceOrderByWithRelationInput | BookedServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookedServices.
     */
    cursor?: BookedServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookedServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookedServices.
     */
    skip?: number
    distinct?: BookedServiceScalarFieldEnum | BookedServiceScalarFieldEnum[]
  }


  /**
   * BookedService create
   */
  export type BookedServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BookedService.
     */
    data: XOR<BookedServiceCreateInput, BookedServiceUncheckedCreateInput>
  }


  /**
   * BookedService createMany
   */
  export type BookedServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookedServices.
     */
    data: BookedServiceCreateManyInput | BookedServiceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BookedService update
   */
  export type BookedServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BookedService.
     */
    data: XOR<BookedServiceUpdateInput, BookedServiceUncheckedUpdateInput>
    /**
     * Choose, which BookedService to update.
     */
    where: BookedServiceWhereUniqueInput
  }


  /**
   * BookedService updateMany
   */
  export type BookedServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookedServices.
     */
    data: XOR<BookedServiceUpdateManyMutationInput, BookedServiceUncheckedUpdateManyInput>
    /**
     * Filter which BookedServices to update
     */
    where?: BookedServiceWhereInput
  }


  /**
   * BookedService upsert
   */
  export type BookedServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BookedService to update in case it exists.
     */
    where: BookedServiceWhereUniqueInput
    /**
     * In case the BookedService found by the `where` argument doesn't exist, create a new BookedService with this data.
     */
    create: XOR<BookedServiceCreateInput, BookedServiceUncheckedCreateInput>
    /**
     * In case the BookedService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookedServiceUpdateInput, BookedServiceUncheckedUpdateInput>
  }


  /**
   * BookedService delete
   */
  export type BookedServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    /**
     * Filter which BookedService to delete.
     */
    where: BookedServiceWhereUniqueInput
  }


  /**
   * BookedService deleteMany
   */
  export type BookedServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookedServices to delete
     */
    where?: BookedServiceWhereInput
  }


  /**
   * BookedService.FilledForm
   */
  export type BookedService$FilledFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilledForm
     */
    select?: FilledFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FilledFormInclude<ExtArgs> | null
    where?: FilledFormWhereInput
    orderBy?: FilledFormOrderByWithRelationInput | FilledFormOrderByWithRelationInput[]
    cursor?: FilledFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilledFormScalarFieldEnum | FilledFormScalarFieldEnum[]
  }


  /**
   * BookedService without action
   */
  export type BookedServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
  }



  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    categoryId: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    categoryId: string | null
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    ServiceRequirement?: boolean | Service$ServiceRequirementArgs<ExtArgs>
    BookedService?: boolean | Service$BookedServiceArgs<ExtArgs>
    FormsForService?: boolean | Service$FormsForServiceArgs<ExtArgs>
    Category?: boolean | Service$CategoryArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ServiceRequirement?: boolean | Service$ServiceRequirementArgs<ExtArgs>
    BookedService?: boolean | Service$BookedServiceArgs<ExtArgs>
    FormsForService?: boolean | Service$FormsForServiceArgs<ExtArgs>
    Category?: boolean | Service$CategoryArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      ServiceRequirement: Prisma.$ServiceRequirementPayload<ExtArgs>[]
      BookedService: Prisma.$BookedServicePayload<ExtArgs>[]
      FormsForService: Prisma.$FormsForServicePayload<ExtArgs>[]
      Category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      categoryId: string | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }


  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
    **/
    create<T extends ServiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Services.
     *     @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const service = await prisma.service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
    **/
    delete<T extends ServiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>
    ): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ServiceRequirement<T extends Service$ServiceRequirementArgs<ExtArgs> = {}>(args?: Subset<T, Service$ServiceRequirementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findMany'> | Null>;

    BookedService<T extends Service$BookedServiceArgs<ExtArgs> = {}>(args?: Subset<T, Service$BookedServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookedServicePayload<ExtArgs>, T, 'findMany'> | Null>;

    FormsForService<T extends Service$FormsForServiceArgs<ExtArgs> = {}>(args?: Subset<T, Service$FormsForServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findMany'> | Null>;

    Category<T extends Service$CategoryArgs<ExtArgs> = {}>(args?: Subset<T, Service$CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly categoryId: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }


  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }


  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }


  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }


  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }


  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }


  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }


  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }


  /**
   * Service.ServiceRequirement
   */
  export type Service$ServiceRequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    where?: ServiceRequirementWhereInput
    orderBy?: ServiceRequirementOrderByWithRelationInput | ServiceRequirementOrderByWithRelationInput[]
    cursor?: ServiceRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequirementScalarFieldEnum | ServiceRequirementScalarFieldEnum[]
  }


  /**
   * Service.BookedService
   */
  export type Service$BookedServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookedService
     */
    select?: BookedServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookedServiceInclude<ExtArgs> | null
    where?: BookedServiceWhereInput
    orderBy?: BookedServiceOrderByWithRelationInput | BookedServiceOrderByWithRelationInput[]
    cursor?: BookedServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookedServiceScalarFieldEnum | BookedServiceScalarFieldEnum[]
  }


  /**
   * Service.FormsForService
   */
  export type Service$FormsForServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    where?: FormsForServiceWhereInput
    orderBy?: FormsForServiceOrderByWithRelationInput | FormsForServiceOrderByWithRelationInput[]
    cursor?: FormsForServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormsForServiceScalarFieldEnum | FormsForServiceScalarFieldEnum[]
  }


  /**
   * Service.Category
   */
  export type Service$CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Category$servicesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    services<T extends Category$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Category$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.services
   */
  export type Category$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model FormsForService
   */

  export type AggregateFormsForService = {
    _count: FormsForServiceCountAggregateOutputType | null
    _avg: FormsForServiceAvgAggregateOutputType | null
    _sum: FormsForServiceSumAggregateOutputType | null
    _min: FormsForServiceMinAggregateOutputType | null
    _max: FormsForServiceMaxAggregateOutputType | null
  }

  export type FormsForServiceAvgAggregateOutputType = {
    formOrder: number | null
  }

  export type FormsForServiceSumAggregateOutputType = {
    formOrder: number | null
  }

  export type FormsForServiceMinAggregateOutputType = {
    formId: string | null
    serviceId: string | null
    formOrder: number | null
  }

  export type FormsForServiceMaxAggregateOutputType = {
    formId: string | null
    serviceId: string | null
    formOrder: number | null
  }

  export type FormsForServiceCountAggregateOutputType = {
    formId: number
    serviceId: number
    formOrder: number
    _all: number
  }


  export type FormsForServiceAvgAggregateInputType = {
    formOrder?: true
  }

  export type FormsForServiceSumAggregateInputType = {
    formOrder?: true
  }

  export type FormsForServiceMinAggregateInputType = {
    formId?: true
    serviceId?: true
    formOrder?: true
  }

  export type FormsForServiceMaxAggregateInputType = {
    formId?: true
    serviceId?: true
    formOrder?: true
  }

  export type FormsForServiceCountAggregateInputType = {
    formId?: true
    serviceId?: true
    formOrder?: true
    _all?: true
  }

  export type FormsForServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormsForService to aggregate.
     */
    where?: FormsForServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormsForServices to fetch.
     */
    orderBy?: FormsForServiceOrderByWithRelationInput | FormsForServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormsForServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormsForServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormsForServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormsForServices
    **/
    _count?: true | FormsForServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormsForServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormsForServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormsForServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormsForServiceMaxAggregateInputType
  }

  export type GetFormsForServiceAggregateType<T extends FormsForServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateFormsForService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormsForService[P]>
      : GetScalarType<T[P], AggregateFormsForService[P]>
  }




  export type FormsForServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormsForServiceWhereInput
    orderBy?: FormsForServiceOrderByWithAggregationInput | FormsForServiceOrderByWithAggregationInput[]
    by: FormsForServiceScalarFieldEnum[] | FormsForServiceScalarFieldEnum
    having?: FormsForServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormsForServiceCountAggregateInputType | true
    _avg?: FormsForServiceAvgAggregateInputType
    _sum?: FormsForServiceSumAggregateInputType
    _min?: FormsForServiceMinAggregateInputType
    _max?: FormsForServiceMaxAggregateInputType
  }

  export type FormsForServiceGroupByOutputType = {
    formId: string
    serviceId: string
    formOrder: number | null
    _count: FormsForServiceCountAggregateOutputType | null
    _avg: FormsForServiceAvgAggregateOutputType | null
    _sum: FormsForServiceSumAggregateOutputType | null
    _min: FormsForServiceMinAggregateOutputType | null
    _max: FormsForServiceMaxAggregateOutputType | null
  }

  type GetFormsForServiceGroupByPayload<T extends FormsForServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormsForServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormsForServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormsForServiceGroupByOutputType[P]>
            : GetScalarType<T[P], FormsForServiceGroupByOutputType[P]>
        }
      >
    >


  export type FormsForServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formId?: boolean
    serviceId?: boolean
    formOrder?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formsForService"]>

  export type FormsForServiceSelectScalar = {
    formId?: boolean
    serviceId?: boolean
    formOrder?: boolean
  }

  export type FormsForServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }


  export type $FormsForServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormsForService"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      formId: string
      serviceId: string
      formOrder: number | null
    }, ExtArgs["result"]["formsForService"]>
    composites: {}
  }


  type FormsForServiceGetPayload<S extends boolean | null | undefined | FormsForServiceDefaultArgs> = $Result.GetResult<Prisma.$FormsForServicePayload, S>

  type FormsForServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormsForServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormsForServiceCountAggregateInputType | true
    }

  export interface FormsForServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormsForService'], meta: { name: 'FormsForService' } }
    /**
     * Find zero or one FormsForService that matches the filter.
     * @param {FormsForServiceFindUniqueArgs} args - Arguments to find a FormsForService
     * @example
     * // Get one FormsForService
     * const formsForService = await prisma.formsForService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormsForServiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FormsForServiceFindUniqueArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FormsForService that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FormsForServiceFindUniqueOrThrowArgs} args - Arguments to find a FormsForService
     * @example
     * // Get one FormsForService
     * const formsForService = await prisma.formsForService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormsForServiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormsForServiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FormsForService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceFindFirstArgs} args - Arguments to find a FormsForService
     * @example
     * // Get one FormsForService
     * const formsForService = await prisma.formsForService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormsForServiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FormsForServiceFindFirstArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FormsForService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceFindFirstOrThrowArgs} args - Arguments to find a FormsForService
     * @example
     * // Get one FormsForService
     * const formsForService = await prisma.formsForService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormsForServiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormsForServiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FormsForServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormsForServices
     * const formsForServices = await prisma.formsForService.findMany()
     * 
     * // Get first 10 FormsForServices
     * const formsForServices = await prisma.formsForService.findMany({ take: 10 })
     * 
     * // Only select the `formId`
     * const formsForServiceWithFormIdOnly = await prisma.formsForService.findMany({ select: { formId: true } })
     * 
    **/
    findMany<T extends FormsForServiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormsForServiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FormsForService.
     * @param {FormsForServiceCreateArgs} args - Arguments to create a FormsForService.
     * @example
     * // Create one FormsForService
     * const FormsForService = await prisma.formsForService.create({
     *   data: {
     *     // ... data to create a FormsForService
     *   }
     * })
     * 
    **/
    create<T extends FormsForServiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FormsForServiceCreateArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FormsForServices.
     *     @param {FormsForServiceCreateManyArgs} args - Arguments to create many FormsForServices.
     *     @example
     *     // Create many FormsForServices
     *     const formsForService = await prisma.formsForService.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormsForServiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormsForServiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FormsForService.
     * @param {FormsForServiceDeleteArgs} args - Arguments to delete one FormsForService.
     * @example
     * // Delete one FormsForService
     * const FormsForService = await prisma.formsForService.delete({
     *   where: {
     *     // ... filter to delete one FormsForService
     *   }
     * })
     * 
    **/
    delete<T extends FormsForServiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FormsForServiceDeleteArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FormsForService.
     * @param {FormsForServiceUpdateArgs} args - Arguments to update one FormsForService.
     * @example
     * // Update one FormsForService
     * const formsForService = await prisma.formsForService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormsForServiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FormsForServiceUpdateArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FormsForServices.
     * @param {FormsForServiceDeleteManyArgs} args - Arguments to filter FormsForServices to delete.
     * @example
     * // Delete a few FormsForServices
     * const { count } = await prisma.formsForService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormsForServiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormsForServiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormsForServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormsForServices
     * const formsForService = await prisma.formsForService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormsForServiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FormsForServiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormsForService.
     * @param {FormsForServiceUpsertArgs} args - Arguments to update or create a FormsForService.
     * @example
     * // Update or create a FormsForService
     * const formsForService = await prisma.formsForService.upsert({
     *   create: {
     *     // ... data to create a FormsForService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormsForService we want to update
     *   }
     * })
    **/
    upsert<T extends FormsForServiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FormsForServiceUpsertArgs<ExtArgs>>
    ): Prisma__FormsForServiceClient<$Result.GetResult<Prisma.$FormsForServicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FormsForServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceCountArgs} args - Arguments to filter FormsForServices to count.
     * @example
     * // Count the number of FormsForServices
     * const count = await prisma.formsForService.count({
     *   where: {
     *     // ... the filter for the FormsForServices we want to count
     *   }
     * })
    **/
    count<T extends FormsForServiceCountArgs>(
      args?: Subset<T, FormsForServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormsForServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormsForService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormsForServiceAggregateArgs>(args: Subset<T, FormsForServiceAggregateArgs>): Prisma.PrismaPromise<GetFormsForServiceAggregateType<T>>

    /**
     * Group by FormsForService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsForServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormsForServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormsForServiceGroupByArgs['orderBy'] }
        : { orderBy?: FormsForServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormsForServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormsForServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormsForService model
   */
  readonly fields: FormsForServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormsForService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormsForServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FormsForService model
   */ 
  interface FormsForServiceFieldRefs {
    readonly formId: FieldRef<"FormsForService", 'String'>
    readonly serviceId: FieldRef<"FormsForService", 'String'>
    readonly formOrder: FieldRef<"FormsForService", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FormsForService findUnique
   */
  export type FormsForServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * Filter, which FormsForService to fetch.
     */
    where: FormsForServiceWhereUniqueInput
  }


  /**
   * FormsForService findUniqueOrThrow
   */
  export type FormsForServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * Filter, which FormsForService to fetch.
     */
    where: FormsForServiceWhereUniqueInput
  }


  /**
   * FormsForService findFirst
   */
  export type FormsForServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * Filter, which FormsForService to fetch.
     */
    where?: FormsForServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormsForServices to fetch.
     */
    orderBy?: FormsForServiceOrderByWithRelationInput | FormsForServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormsForServices.
     */
    cursor?: FormsForServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormsForServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormsForServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormsForServices.
     */
    distinct?: FormsForServiceScalarFieldEnum | FormsForServiceScalarFieldEnum[]
  }


  /**
   * FormsForService findFirstOrThrow
   */
  export type FormsForServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * Filter, which FormsForService to fetch.
     */
    where?: FormsForServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormsForServices to fetch.
     */
    orderBy?: FormsForServiceOrderByWithRelationInput | FormsForServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormsForServices.
     */
    cursor?: FormsForServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormsForServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormsForServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormsForServices.
     */
    distinct?: FormsForServiceScalarFieldEnum | FormsForServiceScalarFieldEnum[]
  }


  /**
   * FormsForService findMany
   */
  export type FormsForServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * Filter, which FormsForServices to fetch.
     */
    where?: FormsForServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormsForServices to fetch.
     */
    orderBy?: FormsForServiceOrderByWithRelationInput | FormsForServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormsForServices.
     */
    cursor?: FormsForServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormsForServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormsForServices.
     */
    skip?: number
    distinct?: FormsForServiceScalarFieldEnum | FormsForServiceScalarFieldEnum[]
  }


  /**
   * FormsForService create
   */
  export type FormsForServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a FormsForService.
     */
    data: XOR<FormsForServiceCreateInput, FormsForServiceUncheckedCreateInput>
  }


  /**
   * FormsForService createMany
   */
  export type FormsForServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormsForServices.
     */
    data: FormsForServiceCreateManyInput | FormsForServiceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FormsForService update
   */
  export type FormsForServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a FormsForService.
     */
    data: XOR<FormsForServiceUpdateInput, FormsForServiceUncheckedUpdateInput>
    /**
     * Choose, which FormsForService to update.
     */
    where: FormsForServiceWhereUniqueInput
  }


  /**
   * FormsForService updateMany
   */
  export type FormsForServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormsForServices.
     */
    data: XOR<FormsForServiceUpdateManyMutationInput, FormsForServiceUncheckedUpdateManyInput>
    /**
     * Filter which FormsForServices to update
     */
    where?: FormsForServiceWhereInput
  }


  /**
   * FormsForService upsert
   */
  export type FormsForServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the FormsForService to update in case it exists.
     */
    where: FormsForServiceWhereUniqueInput
    /**
     * In case the FormsForService found by the `where` argument doesn't exist, create a new FormsForService with this data.
     */
    create: XOR<FormsForServiceCreateInput, FormsForServiceUncheckedCreateInput>
    /**
     * In case the FormsForService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormsForServiceUpdateInput, FormsForServiceUncheckedUpdateInput>
  }


  /**
   * FormsForService delete
   */
  export type FormsForServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
    /**
     * Filter which FormsForService to delete.
     */
    where: FormsForServiceWhereUniqueInput
  }


  /**
   * FormsForService deleteMany
   */
  export type FormsForServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormsForServices to delete
     */
    where?: FormsForServiceWhereInput
  }


  /**
   * FormsForService without action
   */
  export type FormsForServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormsForService
     */
    select?: FormsForServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FormsForServiceInclude<ExtArgs> | null
  }



  /**
   * Model ServiceRequirement
   */

  export type AggregateServiceRequirement = {
    _count: ServiceRequirementCountAggregateOutputType | null
    _min: ServiceRequirementMinAggregateOutputType | null
    _max: ServiceRequirementMaxAggregateOutputType | null
  }

  export type ServiceRequirementMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    required: boolean | null
    description: string | null
    serviceId: string | null
  }

  export type ServiceRequirementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    required: boolean | null
    description: string | null
    serviceId: string | null
  }

  export type ServiceRequirementCountAggregateOutputType = {
    id: number
    name: number
    type: number
    required: number
    description: number
    serviceId: number
    _all: number
  }


  export type ServiceRequirementMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    description?: true
    serviceId?: true
  }

  export type ServiceRequirementMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    description?: true
    serviceId?: true
  }

  export type ServiceRequirementCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    description?: true
    serviceId?: true
    _all?: true
  }

  export type ServiceRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequirement to aggregate.
     */
    where?: ServiceRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirements to fetch.
     */
    orderBy?: ServiceRequirementOrderByWithRelationInput | ServiceRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequirements
    **/
    _count?: true | ServiceRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequirementMaxAggregateInputType
  }

  export type GetServiceRequirementAggregateType<T extends ServiceRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequirement[P]>
      : GetScalarType<T[P], AggregateServiceRequirement[P]>
  }




  export type ServiceRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequirementWhereInput
    orderBy?: ServiceRequirementOrderByWithAggregationInput | ServiceRequirementOrderByWithAggregationInput[]
    by: ServiceRequirementScalarFieldEnum[] | ServiceRequirementScalarFieldEnum
    having?: ServiceRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequirementCountAggregateInputType | true
    _min?: ServiceRequirementMinAggregateInputType
    _max?: ServiceRequirementMaxAggregateInputType
  }

  export type ServiceRequirementGroupByOutputType = {
    id: string
    name: string
    type: string
    required: boolean
    description: string | null
    serviceId: string
    _count: ServiceRequirementCountAggregateOutputType | null
    _min: ServiceRequirementMinAggregateOutputType | null
    _max: ServiceRequirementMaxAggregateOutputType | null
  }

  type GetServiceRequirementGroupByPayload<T extends ServiceRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequirementGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    description?: boolean
    serviceId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ServiceRequirementTranslation?: boolean | ServiceRequirement$ServiceRequirementTranslationArgs<ExtArgs>
    _count?: boolean | ServiceRequirementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequirement"]>

  export type ServiceRequirementSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    description?: boolean
    serviceId?: boolean
  }

  export type ServiceRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    ServiceRequirementTranslation?: boolean | ServiceRequirement$ServiceRequirementTranslationArgs<ExtArgs>
    _count?: boolean | ServiceRequirementCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ServiceRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequirement"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      ServiceRequirementTranslation: Prisma.$ServiceRequirementTranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      required: boolean
      description: string | null
      serviceId: string
    }, ExtArgs["result"]["serviceRequirement"]>
    composites: {}
  }


  type ServiceRequirementGetPayload<S extends boolean | null | undefined | ServiceRequirementDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequirementPayload, S>

  type ServiceRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceRequirementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceRequirementCountAggregateInputType | true
    }

  export interface ServiceRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequirement'], meta: { name: 'ServiceRequirement' } }
    /**
     * Find zero or one ServiceRequirement that matches the filter.
     * @param {ServiceRequirementFindUniqueArgs} args - Arguments to find a ServiceRequirement
     * @example
     * // Get one ServiceRequirement
     * const serviceRequirement = await prisma.serviceRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceRequirementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementFindUniqueArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ServiceRequirement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceRequirementFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequirement
     * @example
     * // Get one ServiceRequirement
     * const serviceRequirement = await prisma.serviceRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceRequirementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ServiceRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementFindFirstArgs} args - Arguments to find a ServiceRequirement
     * @example
     * // Get one ServiceRequirement
     * const serviceRequirement = await prisma.serviceRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceRequirementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementFindFirstArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ServiceRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementFindFirstOrThrowArgs} args - Arguments to find a ServiceRequirement
     * @example
     * // Get one ServiceRequirement
     * const serviceRequirement = await prisma.serviceRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceRequirementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ServiceRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequirements
     * const serviceRequirements = await prisma.serviceRequirement.findMany()
     * 
     * // Get first 10 ServiceRequirements
     * const serviceRequirements = await prisma.serviceRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRequirementWithIdOnly = await prisma.serviceRequirement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServiceRequirementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ServiceRequirement.
     * @param {ServiceRequirementCreateArgs} args - Arguments to create a ServiceRequirement.
     * @example
     * // Create one ServiceRequirement
     * const ServiceRequirement = await prisma.serviceRequirement.create({
     *   data: {
     *     // ... data to create a ServiceRequirement
     *   }
     * })
     * 
    **/
    create<T extends ServiceRequirementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementCreateArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ServiceRequirements.
     *     @param {ServiceRequirementCreateManyArgs} args - Arguments to create many ServiceRequirements.
     *     @example
     *     // Create many ServiceRequirements
     *     const serviceRequirement = await prisma.serviceRequirement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceRequirementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceRequirement.
     * @param {ServiceRequirementDeleteArgs} args - Arguments to delete one ServiceRequirement.
     * @example
     * // Delete one ServiceRequirement
     * const ServiceRequirement = await prisma.serviceRequirement.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequirement
     *   }
     * })
     * 
    **/
    delete<T extends ServiceRequirementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementDeleteArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ServiceRequirement.
     * @param {ServiceRequirementUpdateArgs} args - Arguments to update one ServiceRequirement.
     * @example
     * // Update one ServiceRequirement
     * const serviceRequirement = await prisma.serviceRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceRequirementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementUpdateArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ServiceRequirements.
     * @param {ServiceRequirementDeleteManyArgs} args - Arguments to filter ServiceRequirements to delete.
     * @example
     * // Delete a few ServiceRequirements
     * const { count } = await prisma.serviceRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceRequirementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequirements
     * const serviceRequirement = await prisma.serviceRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceRequirementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceRequirement.
     * @param {ServiceRequirementUpsertArgs} args - Arguments to update or create a ServiceRequirement.
     * @example
     * // Update or create a ServiceRequirement
     * const serviceRequirement = await prisma.serviceRequirement.upsert({
     *   create: {
     *     // ... data to create a ServiceRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequirement we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceRequirementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementUpsertArgs<ExtArgs>>
    ): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ServiceRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementCountArgs} args - Arguments to filter ServiceRequirements to count.
     * @example
     * // Count the number of ServiceRequirements
     * const count = await prisma.serviceRequirement.count({
     *   where: {
     *     // ... the filter for the ServiceRequirements we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequirementCountArgs>(
      args?: Subset<T, ServiceRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequirementAggregateArgs>(args: Subset<T, ServiceRequirementAggregateArgs>): Prisma.PrismaPromise<GetServiceRequirementAggregateType<T>>

    /**
     * Group by ServiceRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequirementGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequirement model
   */
  readonly fields: ServiceRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ServiceRequirementTranslation<T extends ServiceRequirement$ServiceRequirementTranslationArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequirement$ServiceRequirementTranslationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ServiceRequirement model
   */ 
  interface ServiceRequirementFieldRefs {
    readonly id: FieldRef<"ServiceRequirement", 'String'>
    readonly name: FieldRef<"ServiceRequirement", 'String'>
    readonly type: FieldRef<"ServiceRequirement", 'String'>
    readonly required: FieldRef<"ServiceRequirement", 'Boolean'>
    readonly description: FieldRef<"ServiceRequirement", 'String'>
    readonly serviceId: FieldRef<"ServiceRequirement", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ServiceRequirement findUnique
   */
  export type ServiceRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirement to fetch.
     */
    where: ServiceRequirementWhereUniqueInput
  }


  /**
   * ServiceRequirement findUniqueOrThrow
   */
  export type ServiceRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirement to fetch.
     */
    where: ServiceRequirementWhereUniqueInput
  }


  /**
   * ServiceRequirement findFirst
   */
  export type ServiceRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirement to fetch.
     */
    where?: ServiceRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirements to fetch.
     */
    orderBy?: ServiceRequirementOrderByWithRelationInput | ServiceRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequirements.
     */
    cursor?: ServiceRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequirements.
     */
    distinct?: ServiceRequirementScalarFieldEnum | ServiceRequirementScalarFieldEnum[]
  }


  /**
   * ServiceRequirement findFirstOrThrow
   */
  export type ServiceRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirement to fetch.
     */
    where?: ServiceRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirements to fetch.
     */
    orderBy?: ServiceRequirementOrderByWithRelationInput | ServiceRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequirements.
     */
    cursor?: ServiceRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequirements.
     */
    distinct?: ServiceRequirementScalarFieldEnum | ServiceRequirementScalarFieldEnum[]
  }


  /**
   * ServiceRequirement findMany
   */
  export type ServiceRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirements to fetch.
     */
    where?: ServiceRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirements to fetch.
     */
    orderBy?: ServiceRequirementOrderByWithRelationInput | ServiceRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequirements.
     */
    cursor?: ServiceRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirements.
     */
    skip?: number
    distinct?: ServiceRequirementScalarFieldEnum | ServiceRequirementScalarFieldEnum[]
  }


  /**
   * ServiceRequirement create
   */
  export type ServiceRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequirement.
     */
    data: XOR<ServiceRequirementCreateInput, ServiceRequirementUncheckedCreateInput>
  }


  /**
   * ServiceRequirement createMany
   */
  export type ServiceRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequirements.
     */
    data: ServiceRequirementCreateManyInput | ServiceRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ServiceRequirement update
   */
  export type ServiceRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequirement.
     */
    data: XOR<ServiceRequirementUpdateInput, ServiceRequirementUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequirement to update.
     */
    where: ServiceRequirementWhereUniqueInput
  }


  /**
   * ServiceRequirement updateMany
   */
  export type ServiceRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequirements.
     */
    data: XOR<ServiceRequirementUpdateManyMutationInput, ServiceRequirementUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequirements to update
     */
    where?: ServiceRequirementWhereInput
  }


  /**
   * ServiceRequirement upsert
   */
  export type ServiceRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequirement to update in case it exists.
     */
    where: ServiceRequirementWhereUniqueInput
    /**
     * In case the ServiceRequirement found by the `where` argument doesn't exist, create a new ServiceRequirement with this data.
     */
    create: XOR<ServiceRequirementCreateInput, ServiceRequirementUncheckedCreateInput>
    /**
     * In case the ServiceRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequirementUpdateInput, ServiceRequirementUncheckedUpdateInput>
  }


  /**
   * ServiceRequirement delete
   */
  export type ServiceRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequirement to delete.
     */
    where: ServiceRequirementWhereUniqueInput
  }


  /**
   * ServiceRequirement deleteMany
   */
  export type ServiceRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequirements to delete
     */
    where?: ServiceRequirementWhereInput
  }


  /**
   * ServiceRequirement.ServiceRequirementTranslation
   */
  export type ServiceRequirement$ServiceRequirementTranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    where?: ServiceRequirementTranslationWhereInput
    orderBy?: ServiceRequirementTranslationOrderByWithRelationInput | ServiceRequirementTranslationOrderByWithRelationInput[]
    cursor?: ServiceRequirementTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequirementTranslationScalarFieldEnum | ServiceRequirementTranslationScalarFieldEnum[]
  }


  /**
   * ServiceRequirement without action
   */
  export type ServiceRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirement
     */
    select?: ServiceRequirementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementInclude<ExtArgs> | null
  }



  /**
   * Model ServiceRequirementTranslation
   */

  export type AggregateServiceRequirementTranslation = {
    _count: ServiceRequirementTranslationCountAggregateOutputType | null
    _min: ServiceRequirementTranslationMinAggregateOutputType | null
    _max: ServiceRequirementTranslationMaxAggregateOutputType | null
  }

  export type ServiceRequirementTranslationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    language: string | null
    locale: string | null
    serviceRequirementId: string | null
  }

  export type ServiceRequirementTranslationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    language: string | null
    locale: string | null
    serviceRequirementId: string | null
  }

  export type ServiceRequirementTranslationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    language: number
    locale: number
    serviceRequirementId: number
    _all: number
  }


  export type ServiceRequirementTranslationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    language?: true
    locale?: true
    serviceRequirementId?: true
  }

  export type ServiceRequirementTranslationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    language?: true
    locale?: true
    serviceRequirementId?: true
  }

  export type ServiceRequirementTranslationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    language?: true
    locale?: true
    serviceRequirementId?: true
    _all?: true
  }

  export type ServiceRequirementTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequirementTranslation to aggregate.
     */
    where?: ServiceRequirementTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirementTranslations to fetch.
     */
    orderBy?: ServiceRequirementTranslationOrderByWithRelationInput | ServiceRequirementTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequirementTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirementTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirementTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequirementTranslations
    **/
    _count?: true | ServiceRequirementTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequirementTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequirementTranslationMaxAggregateInputType
  }

  export type GetServiceRequirementTranslationAggregateType<T extends ServiceRequirementTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequirementTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequirementTranslation[P]>
      : GetScalarType<T[P], AggregateServiceRequirementTranslation[P]>
  }




  export type ServiceRequirementTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequirementTranslationWhereInput
    orderBy?: ServiceRequirementTranslationOrderByWithAggregationInput | ServiceRequirementTranslationOrderByWithAggregationInput[]
    by: ServiceRequirementTranslationScalarFieldEnum[] | ServiceRequirementTranslationScalarFieldEnum
    having?: ServiceRequirementTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequirementTranslationCountAggregateInputType | true
    _min?: ServiceRequirementTranslationMinAggregateInputType
    _max?: ServiceRequirementTranslationMaxAggregateInputType
  }

  export type ServiceRequirementTranslationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    language: string
    locale: string | null
    serviceRequirementId: string
    _count: ServiceRequirementTranslationCountAggregateOutputType | null
    _min: ServiceRequirementTranslationMinAggregateOutputType | null
    _max: ServiceRequirementTranslationMaxAggregateOutputType | null
  }

  type GetServiceRequirementTranslationGroupByPayload<T extends ServiceRequirementTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequirementTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequirementTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequirementTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequirementTranslationGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequirementTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    language?: boolean
    locale?: boolean
    serviceRequirementId?: boolean
    serviceRequirement?: boolean | ServiceRequirementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequirementTranslation"]>

  export type ServiceRequirementTranslationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    language?: boolean
    locale?: boolean
    serviceRequirementId?: boolean
  }

  export type ServiceRequirementTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceRequirement?: boolean | ServiceRequirementDefaultArgs<ExtArgs>
  }


  export type $ServiceRequirementTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequirementTranslation"
    objects: {
      serviceRequirement: Prisma.$ServiceRequirementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      language: string
      locale: string | null
      serviceRequirementId: string
    }, ExtArgs["result"]["serviceRequirementTranslation"]>
    composites: {}
  }


  type ServiceRequirementTranslationGetPayload<S extends boolean | null | undefined | ServiceRequirementTranslationDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequirementTranslationPayload, S>

  type ServiceRequirementTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceRequirementTranslationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceRequirementTranslationCountAggregateInputType | true
    }

  export interface ServiceRequirementTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequirementTranslation'], meta: { name: 'ServiceRequirementTranslation' } }
    /**
     * Find zero or one ServiceRequirementTranslation that matches the filter.
     * @param {ServiceRequirementTranslationFindUniqueArgs} args - Arguments to find a ServiceRequirementTranslation
     * @example
     * // Get one ServiceRequirementTranslation
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServiceRequirementTranslationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementTranslationFindUniqueArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ServiceRequirementTranslation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ServiceRequirementTranslationFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequirementTranslation
     * @example
     * // Get one ServiceRequirementTranslation
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServiceRequirementTranslationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementTranslationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ServiceRequirementTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationFindFirstArgs} args - Arguments to find a ServiceRequirementTranslation
     * @example
     * // Get one ServiceRequirementTranslation
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServiceRequirementTranslationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementTranslationFindFirstArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ServiceRequirementTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationFindFirstOrThrowArgs} args - Arguments to find a ServiceRequirementTranslation
     * @example
     * // Get one ServiceRequirementTranslation
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServiceRequirementTranslationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementTranslationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ServiceRequirementTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequirementTranslations
     * const serviceRequirementTranslations = await prisma.serviceRequirementTranslation.findMany()
     * 
     * // Get first 10 ServiceRequirementTranslations
     * const serviceRequirementTranslations = await prisma.serviceRequirementTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRequirementTranslationWithIdOnly = await prisma.serviceRequirementTranslation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ServiceRequirementTranslationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementTranslationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ServiceRequirementTranslation.
     * @param {ServiceRequirementTranslationCreateArgs} args - Arguments to create a ServiceRequirementTranslation.
     * @example
     * // Create one ServiceRequirementTranslation
     * const ServiceRequirementTranslation = await prisma.serviceRequirementTranslation.create({
     *   data: {
     *     // ... data to create a ServiceRequirementTranslation
     *   }
     * })
     * 
    **/
    create<T extends ServiceRequirementTranslationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementTranslationCreateArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ServiceRequirementTranslations.
     *     @param {ServiceRequirementTranslationCreateManyArgs} args - Arguments to create many ServiceRequirementTranslations.
     *     @example
     *     // Create many ServiceRequirementTranslations
     *     const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServiceRequirementTranslationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementTranslationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceRequirementTranslation.
     * @param {ServiceRequirementTranslationDeleteArgs} args - Arguments to delete one ServiceRequirementTranslation.
     * @example
     * // Delete one ServiceRequirementTranslation
     * const ServiceRequirementTranslation = await prisma.serviceRequirementTranslation.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequirementTranslation
     *   }
     * })
     * 
    **/
    delete<T extends ServiceRequirementTranslationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementTranslationDeleteArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ServiceRequirementTranslation.
     * @param {ServiceRequirementTranslationUpdateArgs} args - Arguments to update one ServiceRequirementTranslation.
     * @example
     * // Update one ServiceRequirementTranslation
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServiceRequirementTranslationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementTranslationUpdateArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ServiceRequirementTranslations.
     * @param {ServiceRequirementTranslationDeleteManyArgs} args - Arguments to filter ServiceRequirementTranslations to delete.
     * @example
     * // Delete a few ServiceRequirementTranslations
     * const { count } = await prisma.serviceRequirementTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServiceRequirementTranslationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ServiceRequirementTranslationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequirementTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequirementTranslations
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServiceRequirementTranslationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementTranslationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceRequirementTranslation.
     * @param {ServiceRequirementTranslationUpsertArgs} args - Arguments to update or create a ServiceRequirementTranslation.
     * @example
     * // Update or create a ServiceRequirementTranslation
     * const serviceRequirementTranslation = await prisma.serviceRequirementTranslation.upsert({
     *   create: {
     *     // ... data to create a ServiceRequirementTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequirementTranslation we want to update
     *   }
     * })
    **/
    upsert<T extends ServiceRequirementTranslationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ServiceRequirementTranslationUpsertArgs<ExtArgs>>
    ): Prisma__ServiceRequirementTranslationClient<$Result.GetResult<Prisma.$ServiceRequirementTranslationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ServiceRequirementTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationCountArgs} args - Arguments to filter ServiceRequirementTranslations to count.
     * @example
     * // Count the number of ServiceRequirementTranslations
     * const count = await prisma.serviceRequirementTranslation.count({
     *   where: {
     *     // ... the filter for the ServiceRequirementTranslations we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequirementTranslationCountArgs>(
      args?: Subset<T, ServiceRequirementTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequirementTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequirementTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceRequirementTranslationAggregateArgs>(args: Subset<T, ServiceRequirementTranslationAggregateArgs>): Prisma.PrismaPromise<GetServiceRequirementTranslationAggregateType<T>>

    /**
     * Group by ServiceRequirementTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequirementTranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceRequirementTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequirementTranslationGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequirementTranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceRequirementTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequirementTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequirementTranslation model
   */
  readonly fields: ServiceRequirementTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequirementTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequirementTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    serviceRequirement<T extends ServiceRequirementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequirementDefaultArgs<ExtArgs>>): Prisma__ServiceRequirementClient<$Result.GetResult<Prisma.$ServiceRequirementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ServiceRequirementTranslation model
   */ 
  interface ServiceRequirementTranslationFieldRefs {
    readonly id: FieldRef<"ServiceRequirementTranslation", 'String'>
    readonly name: FieldRef<"ServiceRequirementTranslation", 'String'>
    readonly description: FieldRef<"ServiceRequirementTranslation", 'String'>
    readonly language: FieldRef<"ServiceRequirementTranslation", 'String'>
    readonly locale: FieldRef<"ServiceRequirementTranslation", 'String'>
    readonly serviceRequirementId: FieldRef<"ServiceRequirementTranslation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ServiceRequirementTranslation findUnique
   */
  export type ServiceRequirementTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirementTranslation to fetch.
     */
    where: ServiceRequirementTranslationWhereUniqueInput
  }


  /**
   * ServiceRequirementTranslation findUniqueOrThrow
   */
  export type ServiceRequirementTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirementTranslation to fetch.
     */
    where: ServiceRequirementTranslationWhereUniqueInput
  }


  /**
   * ServiceRequirementTranslation findFirst
   */
  export type ServiceRequirementTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirementTranslation to fetch.
     */
    where?: ServiceRequirementTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirementTranslations to fetch.
     */
    orderBy?: ServiceRequirementTranslationOrderByWithRelationInput | ServiceRequirementTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequirementTranslations.
     */
    cursor?: ServiceRequirementTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirementTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirementTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequirementTranslations.
     */
    distinct?: ServiceRequirementTranslationScalarFieldEnum | ServiceRequirementTranslationScalarFieldEnum[]
  }


  /**
   * ServiceRequirementTranslation findFirstOrThrow
   */
  export type ServiceRequirementTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirementTranslation to fetch.
     */
    where?: ServiceRequirementTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirementTranslations to fetch.
     */
    orderBy?: ServiceRequirementTranslationOrderByWithRelationInput | ServiceRequirementTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequirementTranslations.
     */
    cursor?: ServiceRequirementTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirementTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirementTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequirementTranslations.
     */
    distinct?: ServiceRequirementTranslationScalarFieldEnum | ServiceRequirementTranslationScalarFieldEnum[]
  }


  /**
   * ServiceRequirementTranslation findMany
   */
  export type ServiceRequirementTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequirementTranslations to fetch.
     */
    where?: ServiceRequirementTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequirementTranslations to fetch.
     */
    orderBy?: ServiceRequirementTranslationOrderByWithRelationInput | ServiceRequirementTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequirementTranslations.
     */
    cursor?: ServiceRequirementTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequirementTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequirementTranslations.
     */
    skip?: number
    distinct?: ServiceRequirementTranslationScalarFieldEnum | ServiceRequirementTranslationScalarFieldEnum[]
  }


  /**
   * ServiceRequirementTranslation create
   */
  export type ServiceRequirementTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequirementTranslation.
     */
    data: XOR<ServiceRequirementTranslationCreateInput, ServiceRequirementTranslationUncheckedCreateInput>
  }


  /**
   * ServiceRequirementTranslation createMany
   */
  export type ServiceRequirementTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequirementTranslations.
     */
    data: ServiceRequirementTranslationCreateManyInput | ServiceRequirementTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ServiceRequirementTranslation update
   */
  export type ServiceRequirementTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequirementTranslation.
     */
    data: XOR<ServiceRequirementTranslationUpdateInput, ServiceRequirementTranslationUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequirementTranslation to update.
     */
    where: ServiceRequirementTranslationWhereUniqueInput
  }


  /**
   * ServiceRequirementTranslation updateMany
   */
  export type ServiceRequirementTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequirementTranslations.
     */
    data: XOR<ServiceRequirementTranslationUpdateManyMutationInput, ServiceRequirementTranslationUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequirementTranslations to update
     */
    where?: ServiceRequirementTranslationWhereInput
  }


  /**
   * ServiceRequirementTranslation upsert
   */
  export type ServiceRequirementTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequirementTranslation to update in case it exists.
     */
    where: ServiceRequirementTranslationWhereUniqueInput
    /**
     * In case the ServiceRequirementTranslation found by the `where` argument doesn't exist, create a new ServiceRequirementTranslation with this data.
     */
    create: XOR<ServiceRequirementTranslationCreateInput, ServiceRequirementTranslationUncheckedCreateInput>
    /**
     * In case the ServiceRequirementTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequirementTranslationUpdateInput, ServiceRequirementTranslationUncheckedUpdateInput>
  }


  /**
   * ServiceRequirementTranslation delete
   */
  export type ServiceRequirementTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequirementTranslation to delete.
     */
    where: ServiceRequirementTranslationWhereUniqueInput
  }


  /**
   * ServiceRequirementTranslation deleteMany
   */
  export type ServiceRequirementTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequirementTranslations to delete
     */
    where?: ServiceRequirementTranslationWhereInput
  }


  /**
   * ServiceRequirementTranslation without action
   */
  export type ServiceRequirementTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequirementTranslation
     */
    select?: ServiceRequirementTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ServiceRequirementTranslationInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FilledFormScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    bookedServiceId: 'bookedServiceId',
    formDataJson: 'formDataJson',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FilledFormScalarFieldEnum = (typeof FilledFormScalarFieldEnum)[keyof typeof FilledFormScalarFieldEnum]


  export const BookedServiceScalarFieldEnum: {
    id: 'id',
    code: 'code',
    appointmentDate: 'appointmentDate',
    serviceId: 'serviceId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookedServiceScalarFieldEnum = (typeof BookedServiceScalarFieldEnum)[keyof typeof BookedServiceScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FormsForServiceScalarFieldEnum: {
    formId: 'formId',
    serviceId: 'serviceId',
    formOrder: 'formOrder'
  };

  export type FormsForServiceScalarFieldEnum = (typeof FormsForServiceScalarFieldEnum)[keyof typeof FormsForServiceScalarFieldEnum]


  export const ServiceRequirementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    required: 'required',
    description: 'description',
    serviceId: 'serviceId'
  };

  export type ServiceRequirementScalarFieldEnum = (typeof ServiceRequirementScalarFieldEnum)[keyof typeof ServiceRequirementScalarFieldEnum]


  export const ServiceRequirementTranslationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    language: 'language',
    locale: 'locale',
    serviceRequirementId: 'serviceRequirementId'
  };

  export type ServiceRequirementTranslationScalarFieldEnum = (typeof ServiceRequirementTranslationScalarFieldEnum)[keyof typeof ServiceRequirementTranslationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    name?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    FilledForm?: FilledFormListRelationFilter
    FormsForService?: FormsForServiceListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    FilledForm?: FilledFormOrderByRelationAggregateInput
    FormsForService?: FormsForServiceOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    name?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    FilledForm?: FilledFormListRelationFilter
    FormsForService?: FormsForServiceListRelationFilter
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    name?: StringWithAggregatesFilter<"Form"> | string
    description?: StringNullableWithAggregatesFilter<"Form"> | string | null
  }

  export type FilledFormWhereInput = {
    AND?: FilledFormWhereInput | FilledFormWhereInput[]
    OR?: FilledFormWhereInput[]
    NOT?: FilledFormWhereInput | FilledFormWhereInput[]
    id?: StringFilter<"FilledForm"> | string
    formId?: StringFilter<"FilledForm"> | string
    bookedServiceId?: StringFilter<"FilledForm"> | string
    formDataJson?: JsonFilter<"FilledForm">
    status?: StringFilter<"FilledForm"> | string
    createdBy?: StringFilter<"FilledForm"> | string
    createdAt?: DateTimeFilter<"FilledForm"> | Date | string
    updatedAt?: DateTimeNullableFilter<"FilledForm"> | Date | string | null
    bookedService?: XOR<BookedServiceRelationFilter, BookedServiceWhereInput>
    form?: XOR<FormRelationFilter, FormWhereInput>
  }

  export type FilledFormOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    bookedServiceId?: SortOrder
    formDataJson?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    bookedService?: BookedServiceOrderByWithRelationInput
    form?: FormOrderByWithRelationInput
  }

  export type FilledFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    formId_bookedServiceId?: FilledFormFormIdBookedServiceIdCompoundUniqueInput
    AND?: FilledFormWhereInput | FilledFormWhereInput[]
    OR?: FilledFormWhereInput[]
    NOT?: FilledFormWhereInput | FilledFormWhereInput[]
    formId?: StringFilter<"FilledForm"> | string
    bookedServiceId?: StringFilter<"FilledForm"> | string
    formDataJson?: JsonFilter<"FilledForm">
    status?: StringFilter<"FilledForm"> | string
    createdBy?: StringFilter<"FilledForm"> | string
    createdAt?: DateTimeFilter<"FilledForm"> | Date | string
    updatedAt?: DateTimeNullableFilter<"FilledForm"> | Date | string | null
    bookedService?: XOR<BookedServiceRelationFilter, BookedServiceWhereInput>
    form?: XOR<FormRelationFilter, FormWhereInput>
  }, "id" | "formId_bookedServiceId">

  export type FilledFormOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    bookedServiceId?: SortOrder
    formDataJson?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: FilledFormCountOrderByAggregateInput
    _max?: FilledFormMaxOrderByAggregateInput
    _min?: FilledFormMinOrderByAggregateInput
  }

  export type FilledFormScalarWhereWithAggregatesInput = {
    AND?: FilledFormScalarWhereWithAggregatesInput | FilledFormScalarWhereWithAggregatesInput[]
    OR?: FilledFormScalarWhereWithAggregatesInput[]
    NOT?: FilledFormScalarWhereWithAggregatesInput | FilledFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FilledForm"> | string
    formId?: StringWithAggregatesFilter<"FilledForm"> | string
    bookedServiceId?: StringWithAggregatesFilter<"FilledForm"> | string
    formDataJson?: JsonWithAggregatesFilter<"FilledForm">
    status?: StringWithAggregatesFilter<"FilledForm"> | string
    createdBy?: StringWithAggregatesFilter<"FilledForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FilledForm"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"FilledForm"> | Date | string | null
  }

  export type BookedServiceWhereInput = {
    AND?: BookedServiceWhereInput | BookedServiceWhereInput[]
    OR?: BookedServiceWhereInput[]
    NOT?: BookedServiceWhereInput | BookedServiceWhereInput[]
    id?: StringFilter<"BookedService"> | string
    code?: StringNullableFilter<"BookedService"> | string | null
    appointmentDate?: DateTimeNullableFilter<"BookedService"> | Date | string | null
    serviceId?: StringFilter<"BookedService"> | string
    createdBy?: StringFilter<"BookedService"> | string
    createdAt?: DateTimeFilter<"BookedService"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BookedService"> | Date | string | null
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    FilledForm?: FilledFormListRelationFilter
  }

  export type BookedServiceOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    appointmentDate?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    service?: ServiceOrderByWithRelationInput
    FilledForm?: FilledFormOrderByRelationAggregateInput
  }

  export type BookedServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookedServiceWhereInput | BookedServiceWhereInput[]
    OR?: BookedServiceWhereInput[]
    NOT?: BookedServiceWhereInput | BookedServiceWhereInput[]
    code?: StringNullableFilter<"BookedService"> | string | null
    appointmentDate?: DateTimeNullableFilter<"BookedService"> | Date | string | null
    serviceId?: StringFilter<"BookedService"> | string
    createdBy?: StringFilter<"BookedService"> | string
    createdAt?: DateTimeFilter<"BookedService"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BookedService"> | Date | string | null
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    FilledForm?: FilledFormListRelationFilter
  }, "id">

  export type BookedServiceOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    appointmentDate?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BookedServiceCountOrderByAggregateInput
    _max?: BookedServiceMaxOrderByAggregateInput
    _min?: BookedServiceMinOrderByAggregateInput
  }

  export type BookedServiceScalarWhereWithAggregatesInput = {
    AND?: BookedServiceScalarWhereWithAggregatesInput | BookedServiceScalarWhereWithAggregatesInput[]
    OR?: BookedServiceScalarWhereWithAggregatesInput[]
    NOT?: BookedServiceScalarWhereWithAggregatesInput | BookedServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookedService"> | string
    code?: StringNullableWithAggregatesFilter<"BookedService"> | string | null
    appointmentDate?: DateTimeNullableWithAggregatesFilter<"BookedService"> | Date | string | null
    serviceId?: StringWithAggregatesFilter<"BookedService"> | string
    createdBy?: StringWithAggregatesFilter<"BookedService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookedService"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"BookedService"> | Date | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    categoryId?: StringNullableFilter<"Service"> | string | null
    ServiceRequirement?: ServiceRequirementListRelationFilter
    BookedService?: BookedServiceListRelationFilter
    FormsForService?: FormsForServiceListRelationFilter
    Category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    ServiceRequirement?: ServiceRequirementOrderByRelationAggregateInput
    BookedService?: BookedServiceOrderByRelationAggregateInput
    FormsForService?: FormsForServiceOrderByRelationAggregateInput
    Category?: CategoryOrderByWithRelationInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    categoryId?: StringNullableFilter<"Service"> | string | null
    ServiceRequirement?: ServiceRequirementListRelationFilter
    BookedService?: BookedServiceListRelationFilter
    FormsForService?: FormsForServiceListRelationFilter
    Category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Service"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    services?: ServiceListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    services?: ServiceListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type FormsForServiceWhereInput = {
    AND?: FormsForServiceWhereInput | FormsForServiceWhereInput[]
    OR?: FormsForServiceWhereInput[]
    NOT?: FormsForServiceWhereInput | FormsForServiceWhereInput[]
    formId?: StringFilter<"FormsForService"> | string
    serviceId?: StringFilter<"FormsForService"> | string
    formOrder?: IntNullableFilter<"FormsForService"> | number | null
    form?: XOR<FormRelationFilter, FormWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
  }

  export type FormsForServiceOrderByWithRelationInput = {
    formId?: SortOrder
    serviceId?: SortOrder
    formOrder?: SortOrderInput | SortOrder
    form?: FormOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type FormsForServiceWhereUniqueInput = Prisma.AtLeast<{
    formId_serviceId?: FormsForServiceFormIdServiceIdCompoundUniqueInput
    AND?: FormsForServiceWhereInput | FormsForServiceWhereInput[]
    OR?: FormsForServiceWhereInput[]
    NOT?: FormsForServiceWhereInput | FormsForServiceWhereInput[]
    formId?: StringFilter<"FormsForService"> | string
    serviceId?: StringFilter<"FormsForService"> | string
    formOrder?: IntNullableFilter<"FormsForService"> | number | null
    form?: XOR<FormRelationFilter, FormWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
  }, "formId_serviceId">

  export type FormsForServiceOrderByWithAggregationInput = {
    formId?: SortOrder
    serviceId?: SortOrder
    formOrder?: SortOrderInput | SortOrder
    _count?: FormsForServiceCountOrderByAggregateInput
    _avg?: FormsForServiceAvgOrderByAggregateInput
    _max?: FormsForServiceMaxOrderByAggregateInput
    _min?: FormsForServiceMinOrderByAggregateInput
    _sum?: FormsForServiceSumOrderByAggregateInput
  }

  export type FormsForServiceScalarWhereWithAggregatesInput = {
    AND?: FormsForServiceScalarWhereWithAggregatesInput | FormsForServiceScalarWhereWithAggregatesInput[]
    OR?: FormsForServiceScalarWhereWithAggregatesInput[]
    NOT?: FormsForServiceScalarWhereWithAggregatesInput | FormsForServiceScalarWhereWithAggregatesInput[]
    formId?: StringWithAggregatesFilter<"FormsForService"> | string
    serviceId?: StringWithAggregatesFilter<"FormsForService"> | string
    formOrder?: IntNullableWithAggregatesFilter<"FormsForService"> | number | null
  }

  export type ServiceRequirementWhereInput = {
    AND?: ServiceRequirementWhereInput | ServiceRequirementWhereInput[]
    OR?: ServiceRequirementWhereInput[]
    NOT?: ServiceRequirementWhereInput | ServiceRequirementWhereInput[]
    id?: StringFilter<"ServiceRequirement"> | string
    name?: StringFilter<"ServiceRequirement"> | string
    type?: StringFilter<"ServiceRequirement"> | string
    required?: BoolFilter<"ServiceRequirement"> | boolean
    description?: StringNullableFilter<"ServiceRequirement"> | string | null
    serviceId?: StringFilter<"ServiceRequirement"> | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    ServiceRequirementTranslation?: ServiceRequirementTranslationListRelationFilter
  }

  export type ServiceRequirementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    description?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    service?: ServiceOrderByWithRelationInput
    ServiceRequirementTranslation?: ServiceRequirementTranslationOrderByRelationAggregateInput
  }

  export type ServiceRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceRequirementWhereInput | ServiceRequirementWhereInput[]
    OR?: ServiceRequirementWhereInput[]
    NOT?: ServiceRequirementWhereInput | ServiceRequirementWhereInput[]
    name?: StringFilter<"ServiceRequirement"> | string
    type?: StringFilter<"ServiceRequirement"> | string
    required?: BoolFilter<"ServiceRequirement"> | boolean
    description?: StringNullableFilter<"ServiceRequirement"> | string | null
    serviceId?: StringFilter<"ServiceRequirement"> | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    ServiceRequirementTranslation?: ServiceRequirementTranslationListRelationFilter
  }, "id">

  export type ServiceRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    description?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    _count?: ServiceRequirementCountOrderByAggregateInput
    _max?: ServiceRequirementMaxOrderByAggregateInput
    _min?: ServiceRequirementMinOrderByAggregateInput
  }

  export type ServiceRequirementScalarWhereWithAggregatesInput = {
    AND?: ServiceRequirementScalarWhereWithAggregatesInput | ServiceRequirementScalarWhereWithAggregatesInput[]
    OR?: ServiceRequirementScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequirementScalarWhereWithAggregatesInput | ServiceRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceRequirement"> | string
    name?: StringWithAggregatesFilter<"ServiceRequirement"> | string
    type?: StringWithAggregatesFilter<"ServiceRequirement"> | string
    required?: BoolWithAggregatesFilter<"ServiceRequirement"> | boolean
    description?: StringNullableWithAggregatesFilter<"ServiceRequirement"> | string | null
    serviceId?: StringWithAggregatesFilter<"ServiceRequirement"> | string
  }

  export type ServiceRequirementTranslationWhereInput = {
    AND?: ServiceRequirementTranslationWhereInput | ServiceRequirementTranslationWhereInput[]
    OR?: ServiceRequirementTranslationWhereInput[]
    NOT?: ServiceRequirementTranslationWhereInput | ServiceRequirementTranslationWhereInput[]
    id?: StringFilter<"ServiceRequirementTranslation"> | string
    name?: StringFilter<"ServiceRequirementTranslation"> | string
    description?: StringNullableFilter<"ServiceRequirementTranslation"> | string | null
    language?: StringFilter<"ServiceRequirementTranslation"> | string
    locale?: StringNullableFilter<"ServiceRequirementTranslation"> | string | null
    serviceRequirementId?: StringFilter<"ServiceRequirementTranslation"> | string
    serviceRequirement?: XOR<ServiceRequirementRelationFilter, ServiceRequirementWhereInput>
  }

  export type ServiceRequirementTranslationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    language?: SortOrder
    locale?: SortOrderInput | SortOrder
    serviceRequirementId?: SortOrder
    serviceRequirement?: ServiceRequirementOrderByWithRelationInput
  }

  export type ServiceRequirementTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceRequirementTranslationWhereInput | ServiceRequirementTranslationWhereInput[]
    OR?: ServiceRequirementTranslationWhereInput[]
    NOT?: ServiceRequirementTranslationWhereInput | ServiceRequirementTranslationWhereInput[]
    name?: StringFilter<"ServiceRequirementTranslation"> | string
    description?: StringNullableFilter<"ServiceRequirementTranslation"> | string | null
    language?: StringFilter<"ServiceRequirementTranslation"> | string
    locale?: StringNullableFilter<"ServiceRequirementTranslation"> | string | null
    serviceRequirementId?: StringFilter<"ServiceRequirementTranslation"> | string
    serviceRequirement?: XOR<ServiceRequirementRelationFilter, ServiceRequirementWhereInput>
  }, "id">

  export type ServiceRequirementTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    language?: SortOrder
    locale?: SortOrderInput | SortOrder
    serviceRequirementId?: SortOrder
    _count?: ServiceRequirementTranslationCountOrderByAggregateInput
    _max?: ServiceRequirementTranslationMaxOrderByAggregateInput
    _min?: ServiceRequirementTranslationMinOrderByAggregateInput
  }

  export type ServiceRequirementTranslationScalarWhereWithAggregatesInput = {
    AND?: ServiceRequirementTranslationScalarWhereWithAggregatesInput | ServiceRequirementTranslationScalarWhereWithAggregatesInput[]
    OR?: ServiceRequirementTranslationScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequirementTranslationScalarWhereWithAggregatesInput | ServiceRequirementTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceRequirementTranslation"> | string
    name?: StringWithAggregatesFilter<"ServiceRequirementTranslation"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceRequirementTranslation"> | string | null
    language?: StringWithAggregatesFilter<"ServiceRequirementTranslation"> | string
    locale?: StringNullableWithAggregatesFilter<"ServiceRequirementTranslation"> | string | null
    serviceRequirementId?: StringWithAggregatesFilter<"ServiceRequirementTranslation"> | string
  }

  export type FormCreateInput = {
    id?: string
    name: string
    description?: string | null
    FilledForm?: FilledFormCreateNestedManyWithoutFormInput
    FormsForService?: FormsForServiceCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    FilledForm?: FilledFormUncheckedCreateNestedManyWithoutFormInput
    FormsForService?: FormsForServiceUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FilledForm?: FilledFormUpdateManyWithoutFormNestedInput
    FormsForService?: FormsForServiceUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FilledForm?: FilledFormUncheckedUpdateManyWithoutFormNestedInput
    FormsForService?: FormsForServiceUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilledFormCreateInput = {
    id?: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    bookedService: BookedServiceCreateNestedOneWithoutFilledFormInput
    form: FormCreateNestedOneWithoutFilledFormInput
  }

  export type FilledFormUncheckedCreateInput = {
    id?: string
    formId: string
    bookedServiceId: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FilledFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookedService?: BookedServiceUpdateOneRequiredWithoutFilledFormNestedInput
    form?: FormUpdateOneRequiredWithoutFilledFormNestedInput
  }

  export type FilledFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    bookedServiceId?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilledFormCreateManyInput = {
    id?: string
    formId: string
    bookedServiceId: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FilledFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilledFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    bookedServiceId?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookedServiceCreateInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutBookedServiceInput
    FilledForm?: FilledFormCreateNestedManyWithoutBookedServiceInput
  }

  export type BookedServiceUncheckedCreateInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    serviceId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    FilledForm?: FilledFormUncheckedCreateNestedManyWithoutBookedServiceInput
  }

  export type BookedServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutBookedServiceNestedInput
    FilledForm?: FilledFormUpdateManyWithoutBookedServiceNestedInput
  }

  export type BookedServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FilledForm?: FilledFormUncheckedUpdateManyWithoutBookedServiceNestedInput
  }

  export type BookedServiceCreateManyInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    serviceId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookedServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookedServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    ServiceRequirement?: ServiceRequirementCreateNestedManyWithoutServiceInput
    BookedService?: BookedServiceCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceCreateNestedManyWithoutServiceInput
    Category?: CategoryCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    ServiceRequirement?: ServiceRequirementUncheckedCreateNestedManyWithoutServiceInput
    BookedService?: BookedServiceUncheckedCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUpdateManyWithoutServiceNestedInput
    BookedService?: BookedServiceUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUpdateManyWithoutServiceNestedInput
    Category?: CategoryUpdateOneWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUncheckedUpdateManyWithoutServiceNestedInput
    BookedService?: BookedServiceUncheckedUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FormsForServiceCreateInput = {
    formOrder?: number | null
    form: FormCreateNestedOneWithoutFormsForServiceInput
    service: ServiceCreateNestedOneWithoutFormsForServiceInput
  }

  export type FormsForServiceUncheckedCreateInput = {
    formId: string
    serviceId: string
    formOrder?: number | null
  }

  export type FormsForServiceUpdateInput = {
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
    form?: FormUpdateOneRequiredWithoutFormsForServiceNestedInput
    service?: ServiceUpdateOneRequiredWithoutFormsForServiceNestedInput
  }

  export type FormsForServiceUncheckedUpdateInput = {
    formId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FormsForServiceCreateManyInput = {
    formId: string
    serviceId: string
    formOrder?: number | null
  }

  export type FormsForServiceUpdateManyMutationInput = {
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FormsForServiceUncheckedUpdateManyInput = {
    formId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceRequirementCreateInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    service: ServiceCreateNestedOneWithoutServiceRequirementInput
    ServiceRequirementTranslation?: ServiceRequirementTranslationCreateNestedManyWithoutServiceRequirementInput
  }

  export type ServiceRequirementUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    serviceId: string
    ServiceRequirementTranslation?: ServiceRequirementTranslationUncheckedCreateNestedManyWithoutServiceRequirementInput
  }

  export type ServiceRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutServiceRequirementNestedInput
    ServiceRequirementTranslation?: ServiceRequirementTranslationUpdateManyWithoutServiceRequirementNestedInput
  }

  export type ServiceRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    ServiceRequirementTranslation?: ServiceRequirementTranslationUncheckedUpdateManyWithoutServiceRequirementNestedInput
  }

  export type ServiceRequirementCreateManyInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    serviceId: string
  }

  export type ServiceRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequirementTranslationCreateInput = {
    id?: string
    name: string
    description?: string | null
    language: string
    locale?: string | null
    serviceRequirement: ServiceRequirementCreateNestedOneWithoutServiceRequirementTranslationInput
  }

  export type ServiceRequirementTranslationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    language: string
    locale?: string | null
    serviceRequirementId: string
  }

  export type ServiceRequirementTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRequirement?: ServiceRequirementUpdateOneRequiredWithoutServiceRequirementTranslationNestedInput
  }

  export type ServiceRequirementTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRequirementId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceRequirementTranslationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    language: string
    locale?: string | null
    serviceRequirementId: string
  }

  export type ServiceRequirementTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceRequirementTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRequirementId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FilledFormListRelationFilter = {
    every?: FilledFormWhereInput
    some?: FilledFormWhereInput
    none?: FilledFormWhereInput
  }

  export type FormsForServiceListRelationFilter = {
    every?: FormsForServiceWhereInput
    some?: FormsForServiceWhereInput
    none?: FormsForServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FilledFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormsForServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookedServiceRelationFilter = {
    is?: BookedServiceWhereInput
    isNot?: BookedServiceWhereInput
  }

  export type FormRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type FilledFormFormIdBookedServiceIdCompoundUniqueInput = {
    formId: string
    bookedServiceId: string
  }

  export type FilledFormCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    bookedServiceId?: SortOrder
    formDataJson?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilledFormMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    bookedServiceId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilledFormMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    bookedServiceId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type BookedServiceCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    appointmentDate?: SortOrder
    serviceId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookedServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    appointmentDate?: SortOrder
    serviceId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookedServiceMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    appointmentDate?: SortOrder
    serviceId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceRequirementListRelationFilter = {
    every?: ServiceRequirementWhereInput
    some?: ServiceRequirementWhereInput
    none?: ServiceRequirementWhereInput
  }

  export type BookedServiceListRelationFilter = {
    every?: BookedServiceWhereInput
    some?: BookedServiceWhereInput
    none?: BookedServiceWhereInput
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ServiceRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookedServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FormsForServiceFormIdServiceIdCompoundUniqueInput = {
    formId: string
    serviceId: string
  }

  export type FormsForServiceCountOrderByAggregateInput = {
    formId?: SortOrder
    serviceId?: SortOrder
    formOrder?: SortOrder
  }

  export type FormsForServiceAvgOrderByAggregateInput = {
    formOrder?: SortOrder
  }

  export type FormsForServiceMaxOrderByAggregateInput = {
    formId?: SortOrder
    serviceId?: SortOrder
    formOrder?: SortOrder
  }

  export type FormsForServiceMinOrderByAggregateInput = {
    formId?: SortOrder
    serviceId?: SortOrder
    formOrder?: SortOrder
  }

  export type FormsForServiceSumOrderByAggregateInput = {
    formOrder?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceRequirementTranslationListRelationFilter = {
    every?: ServiceRequirementTranslationWhereInput
    some?: ServiceRequirementTranslationWhereInput
    none?: ServiceRequirementTranslationWhereInput
  }

  export type ServiceRequirementTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    description?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    description?: SortOrder
    serviceId?: SortOrder
  }

  export type ServiceRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    description?: SortOrder
    serviceId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServiceRequirementRelationFilter = {
    is?: ServiceRequirementWhereInput
    isNot?: ServiceRequirementWhereInput
  }

  export type ServiceRequirementTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    language?: SortOrder
    locale?: SortOrder
    serviceRequirementId?: SortOrder
  }

  export type ServiceRequirementTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    language?: SortOrder
    locale?: SortOrder
    serviceRequirementId?: SortOrder
  }

  export type ServiceRequirementTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    language?: SortOrder
    locale?: SortOrder
    serviceRequirementId?: SortOrder
  }

  export type FilledFormCreateNestedManyWithoutFormInput = {
    create?: XOR<FilledFormCreateWithoutFormInput, FilledFormUncheckedCreateWithoutFormInput> | FilledFormCreateWithoutFormInput[] | FilledFormUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutFormInput | FilledFormCreateOrConnectWithoutFormInput[]
    createMany?: FilledFormCreateManyFormInputEnvelope
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
  }

  export type FormsForServiceCreateNestedManyWithoutFormInput = {
    create?: XOR<FormsForServiceCreateWithoutFormInput, FormsForServiceUncheckedCreateWithoutFormInput> | FormsForServiceCreateWithoutFormInput[] | FormsForServiceUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutFormInput | FormsForServiceCreateOrConnectWithoutFormInput[]
    createMany?: FormsForServiceCreateManyFormInputEnvelope
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
  }

  export type FilledFormUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FilledFormCreateWithoutFormInput, FilledFormUncheckedCreateWithoutFormInput> | FilledFormCreateWithoutFormInput[] | FilledFormUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutFormInput | FilledFormCreateOrConnectWithoutFormInput[]
    createMany?: FilledFormCreateManyFormInputEnvelope
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
  }

  export type FormsForServiceUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormsForServiceCreateWithoutFormInput, FormsForServiceUncheckedCreateWithoutFormInput> | FormsForServiceCreateWithoutFormInput[] | FormsForServiceUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutFormInput | FormsForServiceCreateOrConnectWithoutFormInput[]
    createMany?: FormsForServiceCreateManyFormInputEnvelope
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FilledFormUpdateManyWithoutFormNestedInput = {
    create?: XOR<FilledFormCreateWithoutFormInput, FilledFormUncheckedCreateWithoutFormInput> | FilledFormCreateWithoutFormInput[] | FilledFormUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutFormInput | FilledFormCreateOrConnectWithoutFormInput[]
    upsert?: FilledFormUpsertWithWhereUniqueWithoutFormInput | FilledFormUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FilledFormCreateManyFormInputEnvelope
    set?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    disconnect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    delete?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    update?: FilledFormUpdateWithWhereUniqueWithoutFormInput | FilledFormUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FilledFormUpdateManyWithWhereWithoutFormInput | FilledFormUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FilledFormScalarWhereInput | FilledFormScalarWhereInput[]
  }

  export type FormsForServiceUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormsForServiceCreateWithoutFormInput, FormsForServiceUncheckedCreateWithoutFormInput> | FormsForServiceCreateWithoutFormInput[] | FormsForServiceUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutFormInput | FormsForServiceCreateOrConnectWithoutFormInput[]
    upsert?: FormsForServiceUpsertWithWhereUniqueWithoutFormInput | FormsForServiceUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormsForServiceCreateManyFormInputEnvelope
    set?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    disconnect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    delete?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    update?: FormsForServiceUpdateWithWhereUniqueWithoutFormInput | FormsForServiceUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormsForServiceUpdateManyWithWhereWithoutFormInput | FormsForServiceUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormsForServiceScalarWhereInput | FormsForServiceScalarWhereInput[]
  }

  export type FilledFormUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FilledFormCreateWithoutFormInput, FilledFormUncheckedCreateWithoutFormInput> | FilledFormCreateWithoutFormInput[] | FilledFormUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutFormInput | FilledFormCreateOrConnectWithoutFormInput[]
    upsert?: FilledFormUpsertWithWhereUniqueWithoutFormInput | FilledFormUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FilledFormCreateManyFormInputEnvelope
    set?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    disconnect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    delete?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    update?: FilledFormUpdateWithWhereUniqueWithoutFormInput | FilledFormUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FilledFormUpdateManyWithWhereWithoutFormInput | FilledFormUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FilledFormScalarWhereInput | FilledFormScalarWhereInput[]
  }

  export type FormsForServiceUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormsForServiceCreateWithoutFormInput, FormsForServiceUncheckedCreateWithoutFormInput> | FormsForServiceCreateWithoutFormInput[] | FormsForServiceUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutFormInput | FormsForServiceCreateOrConnectWithoutFormInput[]
    upsert?: FormsForServiceUpsertWithWhereUniqueWithoutFormInput | FormsForServiceUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormsForServiceCreateManyFormInputEnvelope
    set?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    disconnect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    delete?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    update?: FormsForServiceUpdateWithWhereUniqueWithoutFormInput | FormsForServiceUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormsForServiceUpdateManyWithWhereWithoutFormInput | FormsForServiceUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormsForServiceScalarWhereInput | FormsForServiceScalarWhereInput[]
  }

  export type BookedServiceCreateNestedOneWithoutFilledFormInput = {
    create?: XOR<BookedServiceCreateWithoutFilledFormInput, BookedServiceUncheckedCreateWithoutFilledFormInput>
    connectOrCreate?: BookedServiceCreateOrConnectWithoutFilledFormInput
    connect?: BookedServiceWhereUniqueInput
  }

  export type FormCreateNestedOneWithoutFilledFormInput = {
    create?: XOR<FormCreateWithoutFilledFormInput, FormUncheckedCreateWithoutFilledFormInput>
    connectOrCreate?: FormCreateOrConnectWithoutFilledFormInput
    connect?: FormWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BookedServiceUpdateOneRequiredWithoutFilledFormNestedInput = {
    create?: XOR<BookedServiceCreateWithoutFilledFormInput, BookedServiceUncheckedCreateWithoutFilledFormInput>
    connectOrCreate?: BookedServiceCreateOrConnectWithoutFilledFormInput
    upsert?: BookedServiceUpsertWithoutFilledFormInput
    connect?: BookedServiceWhereUniqueInput
    update?: XOR<XOR<BookedServiceUpdateToOneWithWhereWithoutFilledFormInput, BookedServiceUpdateWithoutFilledFormInput>, BookedServiceUncheckedUpdateWithoutFilledFormInput>
  }

  export type FormUpdateOneRequiredWithoutFilledFormNestedInput = {
    create?: XOR<FormCreateWithoutFilledFormInput, FormUncheckedCreateWithoutFilledFormInput>
    connectOrCreate?: FormCreateOrConnectWithoutFilledFormInput
    upsert?: FormUpsertWithoutFilledFormInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutFilledFormInput, FormUpdateWithoutFilledFormInput>, FormUncheckedUpdateWithoutFilledFormInput>
  }

  export type ServiceCreateNestedOneWithoutBookedServiceInput = {
    create?: XOR<ServiceCreateWithoutBookedServiceInput, ServiceUncheckedCreateWithoutBookedServiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookedServiceInput
    connect?: ServiceWhereUniqueInput
  }

  export type FilledFormCreateNestedManyWithoutBookedServiceInput = {
    create?: XOR<FilledFormCreateWithoutBookedServiceInput, FilledFormUncheckedCreateWithoutBookedServiceInput> | FilledFormCreateWithoutBookedServiceInput[] | FilledFormUncheckedCreateWithoutBookedServiceInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutBookedServiceInput | FilledFormCreateOrConnectWithoutBookedServiceInput[]
    createMany?: FilledFormCreateManyBookedServiceInputEnvelope
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
  }

  export type FilledFormUncheckedCreateNestedManyWithoutBookedServiceInput = {
    create?: XOR<FilledFormCreateWithoutBookedServiceInput, FilledFormUncheckedCreateWithoutBookedServiceInput> | FilledFormCreateWithoutBookedServiceInput[] | FilledFormUncheckedCreateWithoutBookedServiceInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutBookedServiceInput | FilledFormCreateOrConnectWithoutBookedServiceInput[]
    createMany?: FilledFormCreateManyBookedServiceInputEnvelope
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
  }

  export type ServiceUpdateOneRequiredWithoutBookedServiceNestedInput = {
    create?: XOR<ServiceCreateWithoutBookedServiceInput, ServiceUncheckedCreateWithoutBookedServiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookedServiceInput
    upsert?: ServiceUpsertWithoutBookedServiceInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookedServiceInput, ServiceUpdateWithoutBookedServiceInput>, ServiceUncheckedUpdateWithoutBookedServiceInput>
  }

  export type FilledFormUpdateManyWithoutBookedServiceNestedInput = {
    create?: XOR<FilledFormCreateWithoutBookedServiceInput, FilledFormUncheckedCreateWithoutBookedServiceInput> | FilledFormCreateWithoutBookedServiceInput[] | FilledFormUncheckedCreateWithoutBookedServiceInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutBookedServiceInput | FilledFormCreateOrConnectWithoutBookedServiceInput[]
    upsert?: FilledFormUpsertWithWhereUniqueWithoutBookedServiceInput | FilledFormUpsertWithWhereUniqueWithoutBookedServiceInput[]
    createMany?: FilledFormCreateManyBookedServiceInputEnvelope
    set?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    disconnect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    delete?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    update?: FilledFormUpdateWithWhereUniqueWithoutBookedServiceInput | FilledFormUpdateWithWhereUniqueWithoutBookedServiceInput[]
    updateMany?: FilledFormUpdateManyWithWhereWithoutBookedServiceInput | FilledFormUpdateManyWithWhereWithoutBookedServiceInput[]
    deleteMany?: FilledFormScalarWhereInput | FilledFormScalarWhereInput[]
  }

  export type FilledFormUncheckedUpdateManyWithoutBookedServiceNestedInput = {
    create?: XOR<FilledFormCreateWithoutBookedServiceInput, FilledFormUncheckedCreateWithoutBookedServiceInput> | FilledFormCreateWithoutBookedServiceInput[] | FilledFormUncheckedCreateWithoutBookedServiceInput[]
    connectOrCreate?: FilledFormCreateOrConnectWithoutBookedServiceInput | FilledFormCreateOrConnectWithoutBookedServiceInput[]
    upsert?: FilledFormUpsertWithWhereUniqueWithoutBookedServiceInput | FilledFormUpsertWithWhereUniqueWithoutBookedServiceInput[]
    createMany?: FilledFormCreateManyBookedServiceInputEnvelope
    set?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    disconnect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    delete?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    connect?: FilledFormWhereUniqueInput | FilledFormWhereUniqueInput[]
    update?: FilledFormUpdateWithWhereUniqueWithoutBookedServiceInput | FilledFormUpdateWithWhereUniqueWithoutBookedServiceInput[]
    updateMany?: FilledFormUpdateManyWithWhereWithoutBookedServiceInput | FilledFormUpdateManyWithWhereWithoutBookedServiceInput[]
    deleteMany?: FilledFormScalarWhereInput | FilledFormScalarWhereInput[]
  }

  export type ServiceRequirementCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceRequirementCreateWithoutServiceInput, ServiceRequirementUncheckedCreateWithoutServiceInput> | ServiceRequirementCreateWithoutServiceInput[] | ServiceRequirementUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceRequirementCreateOrConnectWithoutServiceInput | ServiceRequirementCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceRequirementCreateManyServiceInputEnvelope
    connect?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
  }

  export type BookedServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookedServiceCreateWithoutServiceInput, BookedServiceUncheckedCreateWithoutServiceInput> | BookedServiceCreateWithoutServiceInput[] | BookedServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookedServiceCreateOrConnectWithoutServiceInput | BookedServiceCreateOrConnectWithoutServiceInput[]
    createMany?: BookedServiceCreateManyServiceInputEnvelope
    connect?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
  }

  export type FormsForServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<FormsForServiceCreateWithoutServiceInput, FormsForServiceUncheckedCreateWithoutServiceInput> | FormsForServiceCreateWithoutServiceInput[] | FormsForServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutServiceInput | FormsForServiceCreateOrConnectWithoutServiceInput[]
    createMany?: FormsForServiceCreateManyServiceInputEnvelope
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    connect?: CategoryWhereUniqueInput
  }

  export type ServiceRequirementUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceRequirementCreateWithoutServiceInput, ServiceRequirementUncheckedCreateWithoutServiceInput> | ServiceRequirementCreateWithoutServiceInput[] | ServiceRequirementUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceRequirementCreateOrConnectWithoutServiceInput | ServiceRequirementCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceRequirementCreateManyServiceInputEnvelope
    connect?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
  }

  export type BookedServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookedServiceCreateWithoutServiceInput, BookedServiceUncheckedCreateWithoutServiceInput> | BookedServiceCreateWithoutServiceInput[] | BookedServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookedServiceCreateOrConnectWithoutServiceInput | BookedServiceCreateOrConnectWithoutServiceInput[]
    createMany?: BookedServiceCreateManyServiceInputEnvelope
    connect?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
  }

  export type FormsForServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<FormsForServiceCreateWithoutServiceInput, FormsForServiceUncheckedCreateWithoutServiceInput> | FormsForServiceCreateWithoutServiceInput[] | FormsForServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutServiceInput | FormsForServiceCreateOrConnectWithoutServiceInput[]
    createMany?: FormsForServiceCreateManyServiceInputEnvelope
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
  }

  export type ServiceRequirementUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceRequirementCreateWithoutServiceInput, ServiceRequirementUncheckedCreateWithoutServiceInput> | ServiceRequirementCreateWithoutServiceInput[] | ServiceRequirementUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceRequirementCreateOrConnectWithoutServiceInput | ServiceRequirementCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceRequirementUpsertWithWhereUniqueWithoutServiceInput | ServiceRequirementUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceRequirementCreateManyServiceInputEnvelope
    set?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    disconnect?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    delete?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    connect?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    update?: ServiceRequirementUpdateWithWhereUniqueWithoutServiceInput | ServiceRequirementUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceRequirementUpdateManyWithWhereWithoutServiceInput | ServiceRequirementUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceRequirementScalarWhereInput | ServiceRequirementScalarWhereInput[]
  }

  export type BookedServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookedServiceCreateWithoutServiceInput, BookedServiceUncheckedCreateWithoutServiceInput> | BookedServiceCreateWithoutServiceInput[] | BookedServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookedServiceCreateOrConnectWithoutServiceInput | BookedServiceCreateOrConnectWithoutServiceInput[]
    upsert?: BookedServiceUpsertWithWhereUniqueWithoutServiceInput | BookedServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookedServiceCreateManyServiceInputEnvelope
    set?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    disconnect?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    delete?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    connect?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    update?: BookedServiceUpdateWithWhereUniqueWithoutServiceInput | BookedServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookedServiceUpdateManyWithWhereWithoutServiceInput | BookedServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookedServiceScalarWhereInput | BookedServiceScalarWhereInput[]
  }

  export type FormsForServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FormsForServiceCreateWithoutServiceInput, FormsForServiceUncheckedCreateWithoutServiceInput> | FormsForServiceCreateWithoutServiceInput[] | FormsForServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutServiceInput | FormsForServiceCreateOrConnectWithoutServiceInput[]
    upsert?: FormsForServiceUpsertWithWhereUniqueWithoutServiceInput | FormsForServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FormsForServiceCreateManyServiceInputEnvelope
    set?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    disconnect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    delete?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    update?: FormsForServiceUpdateWithWhereUniqueWithoutServiceInput | FormsForServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FormsForServiceUpdateManyWithWhereWithoutServiceInput | FormsForServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FormsForServiceScalarWhereInput | FormsForServiceScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutServicesNestedInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    upsert?: CategoryUpsertWithoutServicesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutServicesInput, CategoryUpdateWithoutServicesInput>, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceRequirementUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceRequirementCreateWithoutServiceInput, ServiceRequirementUncheckedCreateWithoutServiceInput> | ServiceRequirementCreateWithoutServiceInput[] | ServiceRequirementUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceRequirementCreateOrConnectWithoutServiceInput | ServiceRequirementCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceRequirementUpsertWithWhereUniqueWithoutServiceInput | ServiceRequirementUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceRequirementCreateManyServiceInputEnvelope
    set?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    disconnect?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    delete?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    connect?: ServiceRequirementWhereUniqueInput | ServiceRequirementWhereUniqueInput[]
    update?: ServiceRequirementUpdateWithWhereUniqueWithoutServiceInput | ServiceRequirementUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceRequirementUpdateManyWithWhereWithoutServiceInput | ServiceRequirementUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceRequirementScalarWhereInput | ServiceRequirementScalarWhereInput[]
  }

  export type BookedServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookedServiceCreateWithoutServiceInput, BookedServiceUncheckedCreateWithoutServiceInput> | BookedServiceCreateWithoutServiceInput[] | BookedServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookedServiceCreateOrConnectWithoutServiceInput | BookedServiceCreateOrConnectWithoutServiceInput[]
    upsert?: BookedServiceUpsertWithWhereUniqueWithoutServiceInput | BookedServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookedServiceCreateManyServiceInputEnvelope
    set?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    disconnect?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    delete?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    connect?: BookedServiceWhereUniqueInput | BookedServiceWhereUniqueInput[]
    update?: BookedServiceUpdateWithWhereUniqueWithoutServiceInput | BookedServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookedServiceUpdateManyWithWhereWithoutServiceInput | BookedServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookedServiceScalarWhereInput | BookedServiceScalarWhereInput[]
  }

  export type FormsForServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FormsForServiceCreateWithoutServiceInput, FormsForServiceUncheckedCreateWithoutServiceInput> | FormsForServiceCreateWithoutServiceInput[] | FormsForServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FormsForServiceCreateOrConnectWithoutServiceInput | FormsForServiceCreateOrConnectWithoutServiceInput[]
    upsert?: FormsForServiceUpsertWithWhereUniqueWithoutServiceInput | FormsForServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FormsForServiceCreateManyServiceInputEnvelope
    set?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    disconnect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    delete?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    connect?: FormsForServiceWhereUniqueInput | FormsForServiceWhereUniqueInput[]
    update?: FormsForServiceUpdateWithWhereUniqueWithoutServiceInput | FormsForServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FormsForServiceUpdateManyWithWhereWithoutServiceInput | FormsForServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FormsForServiceScalarWhereInput | FormsForServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type FormCreateNestedOneWithoutFormsForServiceInput = {
    create?: XOR<FormCreateWithoutFormsForServiceInput, FormUncheckedCreateWithoutFormsForServiceInput>
    connectOrCreate?: FormCreateOrConnectWithoutFormsForServiceInput
    connect?: FormWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutFormsForServiceInput = {
    create?: XOR<ServiceCreateWithoutFormsForServiceInput, ServiceUncheckedCreateWithoutFormsForServiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFormsForServiceInput
    connect?: ServiceWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormUpdateOneRequiredWithoutFormsForServiceNestedInput = {
    create?: XOR<FormCreateWithoutFormsForServiceInput, FormUncheckedCreateWithoutFormsForServiceInput>
    connectOrCreate?: FormCreateOrConnectWithoutFormsForServiceInput
    upsert?: FormUpsertWithoutFormsForServiceInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutFormsForServiceInput, FormUpdateWithoutFormsForServiceInput>, FormUncheckedUpdateWithoutFormsForServiceInput>
  }

  export type ServiceUpdateOneRequiredWithoutFormsForServiceNestedInput = {
    create?: XOR<ServiceCreateWithoutFormsForServiceInput, ServiceUncheckedCreateWithoutFormsForServiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFormsForServiceInput
    upsert?: ServiceUpsertWithoutFormsForServiceInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFormsForServiceInput, ServiceUpdateWithoutFormsForServiceInput>, ServiceUncheckedUpdateWithoutFormsForServiceInput>
  }

  export type ServiceCreateNestedOneWithoutServiceRequirementInput = {
    create?: XOR<ServiceCreateWithoutServiceRequirementInput, ServiceUncheckedCreateWithoutServiceRequirementInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceRequirementInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceRequirementTranslationCreateNestedManyWithoutServiceRequirementInput = {
    create?: XOR<ServiceRequirementTranslationCreateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput> | ServiceRequirementTranslationCreateWithoutServiceRequirementInput[] | ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput[]
    connectOrCreate?: ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput | ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput[]
    createMany?: ServiceRequirementTranslationCreateManyServiceRequirementInputEnvelope
    connect?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
  }

  export type ServiceRequirementTranslationUncheckedCreateNestedManyWithoutServiceRequirementInput = {
    create?: XOR<ServiceRequirementTranslationCreateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput> | ServiceRequirementTranslationCreateWithoutServiceRequirementInput[] | ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput[]
    connectOrCreate?: ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput | ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput[]
    createMany?: ServiceRequirementTranslationCreateManyServiceRequirementInputEnvelope
    connect?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceUpdateOneRequiredWithoutServiceRequirementNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceRequirementInput, ServiceUncheckedCreateWithoutServiceRequirementInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceRequirementInput
    upsert?: ServiceUpsertWithoutServiceRequirementInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutServiceRequirementInput, ServiceUpdateWithoutServiceRequirementInput>, ServiceUncheckedUpdateWithoutServiceRequirementInput>
  }

  export type ServiceRequirementTranslationUpdateManyWithoutServiceRequirementNestedInput = {
    create?: XOR<ServiceRequirementTranslationCreateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput> | ServiceRequirementTranslationCreateWithoutServiceRequirementInput[] | ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput[]
    connectOrCreate?: ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput | ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput[]
    upsert?: ServiceRequirementTranslationUpsertWithWhereUniqueWithoutServiceRequirementInput | ServiceRequirementTranslationUpsertWithWhereUniqueWithoutServiceRequirementInput[]
    createMany?: ServiceRequirementTranslationCreateManyServiceRequirementInputEnvelope
    set?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    disconnect?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    delete?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    connect?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    update?: ServiceRequirementTranslationUpdateWithWhereUniqueWithoutServiceRequirementInput | ServiceRequirementTranslationUpdateWithWhereUniqueWithoutServiceRequirementInput[]
    updateMany?: ServiceRequirementTranslationUpdateManyWithWhereWithoutServiceRequirementInput | ServiceRequirementTranslationUpdateManyWithWhereWithoutServiceRequirementInput[]
    deleteMany?: ServiceRequirementTranslationScalarWhereInput | ServiceRequirementTranslationScalarWhereInput[]
  }

  export type ServiceRequirementTranslationUncheckedUpdateManyWithoutServiceRequirementNestedInput = {
    create?: XOR<ServiceRequirementTranslationCreateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput> | ServiceRequirementTranslationCreateWithoutServiceRequirementInput[] | ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput[]
    connectOrCreate?: ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput | ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput[]
    upsert?: ServiceRequirementTranslationUpsertWithWhereUniqueWithoutServiceRequirementInput | ServiceRequirementTranslationUpsertWithWhereUniqueWithoutServiceRequirementInput[]
    createMany?: ServiceRequirementTranslationCreateManyServiceRequirementInputEnvelope
    set?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    disconnect?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    delete?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    connect?: ServiceRequirementTranslationWhereUniqueInput | ServiceRequirementTranslationWhereUniqueInput[]
    update?: ServiceRequirementTranslationUpdateWithWhereUniqueWithoutServiceRequirementInput | ServiceRequirementTranslationUpdateWithWhereUniqueWithoutServiceRequirementInput[]
    updateMany?: ServiceRequirementTranslationUpdateManyWithWhereWithoutServiceRequirementInput | ServiceRequirementTranslationUpdateManyWithWhereWithoutServiceRequirementInput[]
    deleteMany?: ServiceRequirementTranslationScalarWhereInput | ServiceRequirementTranslationScalarWhereInput[]
  }

  export type ServiceRequirementCreateNestedOneWithoutServiceRequirementTranslationInput = {
    create?: XOR<ServiceRequirementCreateWithoutServiceRequirementTranslationInput, ServiceRequirementUncheckedCreateWithoutServiceRequirementTranslationInput>
    connectOrCreate?: ServiceRequirementCreateOrConnectWithoutServiceRequirementTranslationInput
    connect?: ServiceRequirementWhereUniqueInput
  }

  export type ServiceRequirementUpdateOneRequiredWithoutServiceRequirementTranslationNestedInput = {
    create?: XOR<ServiceRequirementCreateWithoutServiceRequirementTranslationInput, ServiceRequirementUncheckedCreateWithoutServiceRequirementTranslationInput>
    connectOrCreate?: ServiceRequirementCreateOrConnectWithoutServiceRequirementTranslationInput
    upsert?: ServiceRequirementUpsertWithoutServiceRequirementTranslationInput
    connect?: ServiceRequirementWhereUniqueInput
    update?: XOR<XOR<ServiceRequirementUpdateToOneWithWhereWithoutServiceRequirementTranslationInput, ServiceRequirementUpdateWithoutServiceRequirementTranslationInput>, ServiceRequirementUncheckedUpdateWithoutServiceRequirementTranslationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FilledFormCreateWithoutFormInput = {
    id?: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    bookedService: BookedServiceCreateNestedOneWithoutFilledFormInput
  }

  export type FilledFormUncheckedCreateWithoutFormInput = {
    id?: string
    bookedServiceId: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FilledFormCreateOrConnectWithoutFormInput = {
    where: FilledFormWhereUniqueInput
    create: XOR<FilledFormCreateWithoutFormInput, FilledFormUncheckedCreateWithoutFormInput>
  }

  export type FilledFormCreateManyFormInputEnvelope = {
    data: FilledFormCreateManyFormInput | FilledFormCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type FormsForServiceCreateWithoutFormInput = {
    formOrder?: number | null
    service: ServiceCreateNestedOneWithoutFormsForServiceInput
  }

  export type FormsForServiceUncheckedCreateWithoutFormInput = {
    serviceId: string
    formOrder?: number | null
  }

  export type FormsForServiceCreateOrConnectWithoutFormInput = {
    where: FormsForServiceWhereUniqueInput
    create: XOR<FormsForServiceCreateWithoutFormInput, FormsForServiceUncheckedCreateWithoutFormInput>
  }

  export type FormsForServiceCreateManyFormInputEnvelope = {
    data: FormsForServiceCreateManyFormInput | FormsForServiceCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type FilledFormUpsertWithWhereUniqueWithoutFormInput = {
    where: FilledFormWhereUniqueInput
    update: XOR<FilledFormUpdateWithoutFormInput, FilledFormUncheckedUpdateWithoutFormInput>
    create: XOR<FilledFormCreateWithoutFormInput, FilledFormUncheckedCreateWithoutFormInput>
  }

  export type FilledFormUpdateWithWhereUniqueWithoutFormInput = {
    where: FilledFormWhereUniqueInput
    data: XOR<FilledFormUpdateWithoutFormInput, FilledFormUncheckedUpdateWithoutFormInput>
  }

  export type FilledFormUpdateManyWithWhereWithoutFormInput = {
    where: FilledFormScalarWhereInput
    data: XOR<FilledFormUpdateManyMutationInput, FilledFormUncheckedUpdateManyWithoutFormInput>
  }

  export type FilledFormScalarWhereInput = {
    AND?: FilledFormScalarWhereInput | FilledFormScalarWhereInput[]
    OR?: FilledFormScalarWhereInput[]
    NOT?: FilledFormScalarWhereInput | FilledFormScalarWhereInput[]
    id?: StringFilter<"FilledForm"> | string
    formId?: StringFilter<"FilledForm"> | string
    bookedServiceId?: StringFilter<"FilledForm"> | string
    formDataJson?: JsonFilter<"FilledForm">
    status?: StringFilter<"FilledForm"> | string
    createdBy?: StringFilter<"FilledForm"> | string
    createdAt?: DateTimeFilter<"FilledForm"> | Date | string
    updatedAt?: DateTimeNullableFilter<"FilledForm"> | Date | string | null
  }

  export type FormsForServiceUpsertWithWhereUniqueWithoutFormInput = {
    where: FormsForServiceWhereUniqueInput
    update: XOR<FormsForServiceUpdateWithoutFormInput, FormsForServiceUncheckedUpdateWithoutFormInput>
    create: XOR<FormsForServiceCreateWithoutFormInput, FormsForServiceUncheckedCreateWithoutFormInput>
  }

  export type FormsForServiceUpdateWithWhereUniqueWithoutFormInput = {
    where: FormsForServiceWhereUniqueInput
    data: XOR<FormsForServiceUpdateWithoutFormInput, FormsForServiceUncheckedUpdateWithoutFormInput>
  }

  export type FormsForServiceUpdateManyWithWhereWithoutFormInput = {
    where: FormsForServiceScalarWhereInput
    data: XOR<FormsForServiceUpdateManyMutationInput, FormsForServiceUncheckedUpdateManyWithoutFormInput>
  }

  export type FormsForServiceScalarWhereInput = {
    AND?: FormsForServiceScalarWhereInput | FormsForServiceScalarWhereInput[]
    OR?: FormsForServiceScalarWhereInput[]
    NOT?: FormsForServiceScalarWhereInput | FormsForServiceScalarWhereInput[]
    formId?: StringFilter<"FormsForService"> | string
    serviceId?: StringFilter<"FormsForService"> | string
    formOrder?: IntNullableFilter<"FormsForService"> | number | null
  }

  export type BookedServiceCreateWithoutFilledFormInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutBookedServiceInput
  }

  export type BookedServiceUncheckedCreateWithoutFilledFormInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    serviceId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BookedServiceCreateOrConnectWithoutFilledFormInput = {
    where: BookedServiceWhereUniqueInput
    create: XOR<BookedServiceCreateWithoutFilledFormInput, BookedServiceUncheckedCreateWithoutFilledFormInput>
  }

  export type FormCreateWithoutFilledFormInput = {
    id?: string
    name: string
    description?: string | null
    FormsForService?: FormsForServiceCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutFilledFormInput = {
    id?: string
    name: string
    description?: string | null
    FormsForService?: FormsForServiceUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutFilledFormInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutFilledFormInput, FormUncheckedCreateWithoutFilledFormInput>
  }

  export type BookedServiceUpsertWithoutFilledFormInput = {
    update: XOR<BookedServiceUpdateWithoutFilledFormInput, BookedServiceUncheckedUpdateWithoutFilledFormInput>
    create: XOR<BookedServiceCreateWithoutFilledFormInput, BookedServiceUncheckedCreateWithoutFilledFormInput>
    where?: BookedServiceWhereInput
  }

  export type BookedServiceUpdateToOneWithWhereWithoutFilledFormInput = {
    where?: BookedServiceWhereInput
    data: XOR<BookedServiceUpdateWithoutFilledFormInput, BookedServiceUncheckedUpdateWithoutFilledFormInput>
  }

  export type BookedServiceUpdateWithoutFilledFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutBookedServiceNestedInput
  }

  export type BookedServiceUncheckedUpdateWithoutFilledFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormUpsertWithoutFilledFormInput = {
    update: XOR<FormUpdateWithoutFilledFormInput, FormUncheckedUpdateWithoutFilledFormInput>
    create: XOR<FormCreateWithoutFilledFormInput, FormUncheckedCreateWithoutFilledFormInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutFilledFormInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutFilledFormInput, FormUncheckedUpdateWithoutFilledFormInput>
  }

  export type FormUpdateWithoutFilledFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FormsForService?: FormsForServiceUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutFilledFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FormsForService?: FormsForServiceUncheckedUpdateManyWithoutFormNestedInput
  }

  export type ServiceCreateWithoutBookedServiceInput = {
    id?: string
    name: string
    description?: string | null
    ServiceRequirement?: ServiceRequirementCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceCreateNestedManyWithoutServiceInput
    Category?: CategoryCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutBookedServiceInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    ServiceRequirement?: ServiceRequirementUncheckedCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBookedServiceInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookedServiceInput, ServiceUncheckedCreateWithoutBookedServiceInput>
  }

  export type FilledFormCreateWithoutBookedServiceInput = {
    id?: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    form: FormCreateNestedOneWithoutFilledFormInput
  }

  export type FilledFormUncheckedCreateWithoutBookedServiceInput = {
    id?: string
    formId: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FilledFormCreateOrConnectWithoutBookedServiceInput = {
    where: FilledFormWhereUniqueInput
    create: XOR<FilledFormCreateWithoutBookedServiceInput, FilledFormUncheckedCreateWithoutBookedServiceInput>
  }

  export type FilledFormCreateManyBookedServiceInputEnvelope = {
    data: FilledFormCreateManyBookedServiceInput | FilledFormCreateManyBookedServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithoutBookedServiceInput = {
    update: XOR<ServiceUpdateWithoutBookedServiceInput, ServiceUncheckedUpdateWithoutBookedServiceInput>
    create: XOR<ServiceCreateWithoutBookedServiceInput, ServiceUncheckedCreateWithoutBookedServiceInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookedServiceInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookedServiceInput, ServiceUncheckedUpdateWithoutBookedServiceInput>
  }

  export type ServiceUpdateWithoutBookedServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUpdateManyWithoutServiceNestedInput
    Category?: CategoryUpdateOneWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookedServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUncheckedUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type FilledFormUpsertWithWhereUniqueWithoutBookedServiceInput = {
    where: FilledFormWhereUniqueInput
    update: XOR<FilledFormUpdateWithoutBookedServiceInput, FilledFormUncheckedUpdateWithoutBookedServiceInput>
    create: XOR<FilledFormCreateWithoutBookedServiceInput, FilledFormUncheckedCreateWithoutBookedServiceInput>
  }

  export type FilledFormUpdateWithWhereUniqueWithoutBookedServiceInput = {
    where: FilledFormWhereUniqueInput
    data: XOR<FilledFormUpdateWithoutBookedServiceInput, FilledFormUncheckedUpdateWithoutBookedServiceInput>
  }

  export type FilledFormUpdateManyWithWhereWithoutBookedServiceInput = {
    where: FilledFormScalarWhereInput
    data: XOR<FilledFormUpdateManyMutationInput, FilledFormUncheckedUpdateManyWithoutBookedServiceInput>
  }

  export type ServiceRequirementCreateWithoutServiceInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    ServiceRequirementTranslation?: ServiceRequirementTranslationCreateNestedManyWithoutServiceRequirementInput
  }

  export type ServiceRequirementUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    ServiceRequirementTranslation?: ServiceRequirementTranslationUncheckedCreateNestedManyWithoutServiceRequirementInput
  }

  export type ServiceRequirementCreateOrConnectWithoutServiceInput = {
    where: ServiceRequirementWhereUniqueInput
    create: XOR<ServiceRequirementCreateWithoutServiceInput, ServiceRequirementUncheckedCreateWithoutServiceInput>
  }

  export type ServiceRequirementCreateManyServiceInputEnvelope = {
    data: ServiceRequirementCreateManyServiceInput | ServiceRequirementCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type BookedServiceCreateWithoutServiceInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    FilledForm?: FilledFormCreateNestedManyWithoutBookedServiceInput
  }

  export type BookedServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    FilledForm?: FilledFormUncheckedCreateNestedManyWithoutBookedServiceInput
  }

  export type BookedServiceCreateOrConnectWithoutServiceInput = {
    where: BookedServiceWhereUniqueInput
    create: XOR<BookedServiceCreateWithoutServiceInput, BookedServiceUncheckedCreateWithoutServiceInput>
  }

  export type BookedServiceCreateManyServiceInputEnvelope = {
    data: BookedServiceCreateManyServiceInput | BookedServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type FormsForServiceCreateWithoutServiceInput = {
    formOrder?: number | null
    form: FormCreateNestedOneWithoutFormsForServiceInput
  }

  export type FormsForServiceUncheckedCreateWithoutServiceInput = {
    formId: string
    formOrder?: number | null
  }

  export type FormsForServiceCreateOrConnectWithoutServiceInput = {
    where: FormsForServiceWhereUniqueInput
    create: XOR<FormsForServiceCreateWithoutServiceInput, FormsForServiceUncheckedCreateWithoutServiceInput>
  }

  export type FormsForServiceCreateManyServiceInputEnvelope = {
    data: FormsForServiceCreateManyServiceInput | FormsForServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutServicesInput = {
    id?: string
    name: string
  }

  export type CategoryUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
  }

  export type CategoryCreateOrConnectWithoutServicesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
  }

  export type ServiceRequirementUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceRequirementWhereUniqueInput
    update: XOR<ServiceRequirementUpdateWithoutServiceInput, ServiceRequirementUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceRequirementCreateWithoutServiceInput, ServiceRequirementUncheckedCreateWithoutServiceInput>
  }

  export type ServiceRequirementUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceRequirementWhereUniqueInput
    data: XOR<ServiceRequirementUpdateWithoutServiceInput, ServiceRequirementUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceRequirementUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceRequirementScalarWhereInput
    data: XOR<ServiceRequirementUpdateManyMutationInput, ServiceRequirementUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceRequirementScalarWhereInput = {
    AND?: ServiceRequirementScalarWhereInput | ServiceRequirementScalarWhereInput[]
    OR?: ServiceRequirementScalarWhereInput[]
    NOT?: ServiceRequirementScalarWhereInput | ServiceRequirementScalarWhereInput[]
    id?: StringFilter<"ServiceRequirement"> | string
    name?: StringFilter<"ServiceRequirement"> | string
    type?: StringFilter<"ServiceRequirement"> | string
    required?: BoolFilter<"ServiceRequirement"> | boolean
    description?: StringNullableFilter<"ServiceRequirement"> | string | null
    serviceId?: StringFilter<"ServiceRequirement"> | string
  }

  export type BookedServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookedServiceWhereUniqueInput
    update: XOR<BookedServiceUpdateWithoutServiceInput, BookedServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<BookedServiceCreateWithoutServiceInput, BookedServiceUncheckedCreateWithoutServiceInput>
  }

  export type BookedServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookedServiceWhereUniqueInput
    data: XOR<BookedServiceUpdateWithoutServiceInput, BookedServiceUncheckedUpdateWithoutServiceInput>
  }

  export type BookedServiceUpdateManyWithWhereWithoutServiceInput = {
    where: BookedServiceScalarWhereInput
    data: XOR<BookedServiceUpdateManyMutationInput, BookedServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type BookedServiceScalarWhereInput = {
    AND?: BookedServiceScalarWhereInput | BookedServiceScalarWhereInput[]
    OR?: BookedServiceScalarWhereInput[]
    NOT?: BookedServiceScalarWhereInput | BookedServiceScalarWhereInput[]
    id?: StringFilter<"BookedService"> | string
    code?: StringNullableFilter<"BookedService"> | string | null
    appointmentDate?: DateTimeNullableFilter<"BookedService"> | Date | string | null
    serviceId?: StringFilter<"BookedService"> | string
    createdBy?: StringFilter<"BookedService"> | string
    createdAt?: DateTimeFilter<"BookedService"> | Date | string
    updatedAt?: DateTimeNullableFilter<"BookedService"> | Date | string | null
  }

  export type FormsForServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: FormsForServiceWhereUniqueInput
    update: XOR<FormsForServiceUpdateWithoutServiceInput, FormsForServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<FormsForServiceCreateWithoutServiceInput, FormsForServiceUncheckedCreateWithoutServiceInput>
  }

  export type FormsForServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: FormsForServiceWhereUniqueInput
    data: XOR<FormsForServiceUpdateWithoutServiceInput, FormsForServiceUncheckedUpdateWithoutServiceInput>
  }

  export type FormsForServiceUpdateManyWithWhereWithoutServiceInput = {
    where: FormsForServiceScalarWhereInput
    data: XOR<FormsForServiceUpdateManyMutationInput, FormsForServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type CategoryUpsertWithoutServicesInput = {
    update: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    ServiceRequirement?: ServiceRequirementCreateNestedManyWithoutServiceInput
    BookedService?: BookedServiceCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    ServiceRequirement?: ServiceRequirementUncheckedCreateNestedManyWithoutServiceInput
    BookedService?: BookedServiceUncheckedCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    categoryId?: StringNullableFilter<"Service"> | string | null
  }

  export type FormCreateWithoutFormsForServiceInput = {
    id?: string
    name: string
    description?: string | null
    FilledForm?: FilledFormCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutFormsForServiceInput = {
    id?: string
    name: string
    description?: string | null
    FilledForm?: FilledFormUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutFormsForServiceInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutFormsForServiceInput, FormUncheckedCreateWithoutFormsForServiceInput>
  }

  export type ServiceCreateWithoutFormsForServiceInput = {
    id?: string
    name: string
    description?: string | null
    ServiceRequirement?: ServiceRequirementCreateNestedManyWithoutServiceInput
    BookedService?: BookedServiceCreateNestedManyWithoutServiceInput
    Category?: CategoryCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutFormsForServiceInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    ServiceRequirement?: ServiceRequirementUncheckedCreateNestedManyWithoutServiceInput
    BookedService?: BookedServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFormsForServiceInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFormsForServiceInput, ServiceUncheckedCreateWithoutFormsForServiceInput>
  }

  export type FormUpsertWithoutFormsForServiceInput = {
    update: XOR<FormUpdateWithoutFormsForServiceInput, FormUncheckedUpdateWithoutFormsForServiceInput>
    create: XOR<FormCreateWithoutFormsForServiceInput, FormUncheckedCreateWithoutFormsForServiceInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutFormsForServiceInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutFormsForServiceInput, FormUncheckedUpdateWithoutFormsForServiceInput>
  }

  export type FormUpdateWithoutFormsForServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FilledForm?: FilledFormUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutFormsForServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    FilledForm?: FilledFormUncheckedUpdateManyWithoutFormNestedInput
  }

  export type ServiceUpsertWithoutFormsForServiceInput = {
    update: XOR<ServiceUpdateWithoutFormsForServiceInput, ServiceUncheckedUpdateWithoutFormsForServiceInput>
    create: XOR<ServiceCreateWithoutFormsForServiceInput, ServiceUncheckedCreateWithoutFormsForServiceInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFormsForServiceInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFormsForServiceInput, ServiceUncheckedUpdateWithoutFormsForServiceInput>
  }

  export type ServiceUpdateWithoutFormsForServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUpdateManyWithoutServiceNestedInput
    BookedService?: BookedServiceUpdateManyWithoutServiceNestedInput
    Category?: CategoryUpdateOneWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFormsForServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUncheckedUpdateManyWithoutServiceNestedInput
    BookedService?: BookedServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutServiceRequirementInput = {
    id?: string
    name: string
    description?: string | null
    BookedService?: BookedServiceCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceCreateNestedManyWithoutServiceInput
    Category?: CategoryCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutServiceRequirementInput = {
    id?: string
    name: string
    description?: string | null
    categoryId?: string | null
    BookedService?: BookedServiceUncheckedCreateNestedManyWithoutServiceInput
    FormsForService?: FormsForServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutServiceRequirementInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceRequirementInput, ServiceUncheckedCreateWithoutServiceRequirementInput>
  }

  export type ServiceRequirementTranslationCreateWithoutServiceRequirementInput = {
    id?: string
    name: string
    description?: string | null
    language: string
    locale?: string | null
  }

  export type ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput = {
    id?: string
    name: string
    description?: string | null
    language: string
    locale?: string | null
  }

  export type ServiceRequirementTranslationCreateOrConnectWithoutServiceRequirementInput = {
    where: ServiceRequirementTranslationWhereUniqueInput
    create: XOR<ServiceRequirementTranslationCreateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput>
  }

  export type ServiceRequirementTranslationCreateManyServiceRequirementInputEnvelope = {
    data: ServiceRequirementTranslationCreateManyServiceRequirementInput | ServiceRequirementTranslationCreateManyServiceRequirementInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithoutServiceRequirementInput = {
    update: XOR<ServiceUpdateWithoutServiceRequirementInput, ServiceUncheckedUpdateWithoutServiceRequirementInput>
    create: XOR<ServiceCreateWithoutServiceRequirementInput, ServiceUncheckedCreateWithoutServiceRequirementInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutServiceRequirementInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutServiceRequirementInput, ServiceUncheckedUpdateWithoutServiceRequirementInput>
  }

  export type ServiceUpdateWithoutServiceRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    BookedService?: BookedServiceUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUpdateManyWithoutServiceNestedInput
    Category?: CategoryUpdateOneWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    BookedService?: BookedServiceUncheckedUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceRequirementTranslationUpsertWithWhereUniqueWithoutServiceRequirementInput = {
    where: ServiceRequirementTranslationWhereUniqueInput
    update: XOR<ServiceRequirementTranslationUpdateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedUpdateWithoutServiceRequirementInput>
    create: XOR<ServiceRequirementTranslationCreateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedCreateWithoutServiceRequirementInput>
  }

  export type ServiceRequirementTranslationUpdateWithWhereUniqueWithoutServiceRequirementInput = {
    where: ServiceRequirementTranslationWhereUniqueInput
    data: XOR<ServiceRequirementTranslationUpdateWithoutServiceRequirementInput, ServiceRequirementTranslationUncheckedUpdateWithoutServiceRequirementInput>
  }

  export type ServiceRequirementTranslationUpdateManyWithWhereWithoutServiceRequirementInput = {
    where: ServiceRequirementTranslationScalarWhereInput
    data: XOR<ServiceRequirementTranslationUpdateManyMutationInput, ServiceRequirementTranslationUncheckedUpdateManyWithoutServiceRequirementInput>
  }

  export type ServiceRequirementTranslationScalarWhereInput = {
    AND?: ServiceRequirementTranslationScalarWhereInput | ServiceRequirementTranslationScalarWhereInput[]
    OR?: ServiceRequirementTranslationScalarWhereInput[]
    NOT?: ServiceRequirementTranslationScalarWhereInput | ServiceRequirementTranslationScalarWhereInput[]
    id?: StringFilter<"ServiceRequirementTranslation"> | string
    name?: StringFilter<"ServiceRequirementTranslation"> | string
    description?: StringNullableFilter<"ServiceRequirementTranslation"> | string | null
    language?: StringFilter<"ServiceRequirementTranslation"> | string
    locale?: StringNullableFilter<"ServiceRequirementTranslation"> | string | null
    serviceRequirementId?: StringFilter<"ServiceRequirementTranslation"> | string
  }

  export type ServiceRequirementCreateWithoutServiceRequirementTranslationInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    service: ServiceCreateNestedOneWithoutServiceRequirementInput
  }

  export type ServiceRequirementUncheckedCreateWithoutServiceRequirementTranslationInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
    serviceId: string
  }

  export type ServiceRequirementCreateOrConnectWithoutServiceRequirementTranslationInput = {
    where: ServiceRequirementWhereUniqueInput
    create: XOR<ServiceRequirementCreateWithoutServiceRequirementTranslationInput, ServiceRequirementUncheckedCreateWithoutServiceRequirementTranslationInput>
  }

  export type ServiceRequirementUpsertWithoutServiceRequirementTranslationInput = {
    update: XOR<ServiceRequirementUpdateWithoutServiceRequirementTranslationInput, ServiceRequirementUncheckedUpdateWithoutServiceRequirementTranslationInput>
    create: XOR<ServiceRequirementCreateWithoutServiceRequirementTranslationInput, ServiceRequirementUncheckedCreateWithoutServiceRequirementTranslationInput>
    where?: ServiceRequirementWhereInput
  }

  export type ServiceRequirementUpdateToOneWithWhereWithoutServiceRequirementTranslationInput = {
    where?: ServiceRequirementWhereInput
    data: XOR<ServiceRequirementUpdateWithoutServiceRequirementTranslationInput, ServiceRequirementUncheckedUpdateWithoutServiceRequirementTranslationInput>
  }

  export type ServiceRequirementUpdateWithoutServiceRequirementTranslationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutServiceRequirementNestedInput
  }

  export type ServiceRequirementUncheckedUpdateWithoutServiceRequirementTranslationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type FilledFormCreateManyFormInput = {
    id?: string
    bookedServiceId: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FormsForServiceCreateManyFormInput = {
    serviceId: string
    formOrder?: number | null
  }

  export type FilledFormUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookedService?: BookedServiceUpdateOneRequiredWithoutFilledFormNestedInput
  }

  export type FilledFormUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookedServiceId?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilledFormUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookedServiceId?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormsForServiceUpdateWithoutFormInput = {
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
    service?: ServiceUpdateOneRequiredWithoutFormsForServiceNestedInput
  }

  export type FormsForServiceUncheckedUpdateWithoutFormInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FormsForServiceUncheckedUpdateManyWithoutFormInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FilledFormCreateManyBookedServiceInput = {
    id?: string
    formId: string
    formDataJson: JsonNullValueInput | InputJsonValue
    status?: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FilledFormUpdateWithoutBookedServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    form?: FormUpdateOneRequiredWithoutFilledFormNestedInput
  }

  export type FilledFormUncheckedUpdateWithoutBookedServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilledFormUncheckedUpdateManyWithoutBookedServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    formDataJson?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceRequirementCreateManyServiceInput = {
    id?: string
    name: string
    type: string
    required?: boolean
    description?: string | null
  }

  export type BookedServiceCreateManyServiceInput = {
    id?: string
    code?: string | null
    appointmentDate?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FormsForServiceCreateManyServiceInput = {
    formId: string
    formOrder?: number | null
  }

  export type ServiceRequirementUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirementTranslation?: ServiceRequirementTranslationUpdateManyWithoutServiceRequirementNestedInput
  }

  export type ServiceRequirementUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirementTranslation?: ServiceRequirementTranslationUncheckedUpdateManyWithoutServiceRequirementNestedInput
  }

  export type ServiceRequirementUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookedServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FilledForm?: FilledFormUpdateManyWithoutBookedServiceNestedInput
  }

  export type BookedServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FilledForm?: FilledFormUncheckedUpdateManyWithoutBookedServiceNestedInput
  }

  export type BookedServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FormsForServiceUpdateWithoutServiceInput = {
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
    form?: FormUpdateOneRequiredWithoutFormsForServiceNestedInput
  }

  export type FormsForServiceUncheckedUpdateWithoutServiceInput = {
    formId?: StringFieldUpdateOperationsInput | string
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FormsForServiceUncheckedUpdateManyWithoutServiceInput = {
    formId?: StringFieldUpdateOperationsInput | string
    formOrder?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUpdateManyWithoutServiceNestedInput
    BookedService?: BookedServiceUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ServiceRequirement?: ServiceRequirementUncheckedUpdateManyWithoutServiceNestedInput
    BookedService?: BookedServiceUncheckedUpdateManyWithoutServiceNestedInput
    FormsForService?: FormsForServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceRequirementTranslationCreateManyServiceRequirementInput = {
    id?: string
    name: string
    description?: string | null
    language: string
    locale?: string | null
  }

  export type ServiceRequirementTranslationUpdateWithoutServiceRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceRequirementTranslationUncheckedUpdateWithoutServiceRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceRequirementTranslationUncheckedUpdateManyWithoutServiceRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    locale?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FormCountOutputTypeDefaultArgs instead
     */
    export type FormCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookedServiceCountOutputTypeDefaultArgs instead
     */
    export type BookedServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookedServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceRequirementCountOutputTypeDefaultArgs instead
     */
    export type ServiceRequirementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceRequirementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormDefaultArgs instead
     */
    export type FormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FilledFormDefaultArgs instead
     */
    export type FilledFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FilledFormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookedServiceDefaultArgs instead
     */
    export type BookedServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookedServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormsForServiceDefaultArgs instead
     */
    export type FormsForServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormsForServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceRequirementDefaultArgs instead
     */
    export type ServiceRequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceRequirementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceRequirementTranslationDefaultArgs instead
     */
    export type ServiceRequirementTranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceRequirementTranslationDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}