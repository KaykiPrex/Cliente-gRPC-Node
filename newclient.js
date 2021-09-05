const PROTO_PATH = __dirname + "/../rcp-servidor/src/main/resources/farmacia.proto"; // Carpeta del servidor donde esta archivo proto

const grpc = require("@grpc/grpc-js"); // Carpeta de Librerias Grpc
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const farmacia/*service*/ = grpc.loadPackageDefinition(packageDefinition).farmacia; //nombre de servicio en server java del archivo proto 
const client = new farmacia(
    "localhost:9090",
    grpc.credentials.createInsecure()
);

module.exports = client;