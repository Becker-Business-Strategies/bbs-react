
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// ../../becker-business/api/functions/hello-world/hello-world.mts
var hello_world_default = (request, context) => {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get("name") || "World";
    return new Response(`Hello ${subject}`);
  } catch (error) {
    return new Response(error.toString(), {
      status: 500
    });
  }
};
export {
  hello_world_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vYmVja2VyLWJ1c2luZXNzL2FwaS9mdW5jdGlvbnMvaGVsbG8td29ybGQvaGVsbG8td29ybGQubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQG5ldGxpZnkvZnVuY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCAocmVxdWVzdDogUmVxdWVzdCwgY29udGV4dDogQ29udGV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3Qgc3ViamVjdCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCduYW1lJykgfHwgJ1dvcmxkJ1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShgSGVsbG8gJHtzdWJqZWN0fWApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShlcnJvci50b1N0cmluZygpLCB7XG4gICAgICBzdGF0dXM6IDUwMCxcbiAgICB9KVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBRUEsSUFBTyxzQkFBUSxDQUFDLFNBQWtCLFlBQXFCO0FBQ3JELE1BQUk7QUFDRixVQUFNLE1BQU0sSUFBSSxJQUFJLFFBQVEsR0FBRztBQUMvQixVQUFNLFVBQVUsSUFBSSxhQUFhLElBQUksTUFBTSxLQUFLO0FBRWhELFdBQU8sSUFBSSxTQUFTLFNBQVMsT0FBTyxFQUFFO0FBQUEsRUFDeEMsU0FBUyxPQUFPO0FBQ2QsV0FBTyxJQUFJLFNBQVMsTUFBTSxTQUFTLEdBQUc7QUFBQSxNQUNwQyxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
