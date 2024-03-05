import { Service, Options } from "./type";
import useRequestImplement from "./useRequestImplement";

export default <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>
  //   plugins?: Plugin<TData, TParams>[]
) => {
  return useRequestImplement<TData, TParams>(service, options, []);
};
