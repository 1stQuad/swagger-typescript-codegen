import { makeTypeSpecFromSwaggerType, TypeSpec } from "../typespec";
import { SwaggerDate, SwaggerType } from "../swagger/Swagger";

export interface StringTypeSpec extends TypeSpec {
  readonly tsType: "Date";
  readonly isAtomic: true;
}

export function makeDateTypeSpec(swaggerType: SwaggerDate): StringTypeSpec {
  return {
    ...makeTypeSpecFromSwaggerType(swaggerType),
    tsType: "Date",
    isAtomic: true
  };
}

export function isDate(swaggerType: SwaggerType): swaggerType is SwaggerDate {
  if (swaggerType.format)
    return swaggerType.type === "string" && swaggerType.format === "date-time";
  else return false;
}
