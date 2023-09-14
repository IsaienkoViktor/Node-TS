import Person from "app/controller/person";

type Controller = typeof Person;

const controllers = <Controller[]>[Person];

export { controllers };
