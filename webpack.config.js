// Requerimos el modulo de path el Html plugin que isntalamos
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //plugin que nosotros instalamos
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //vamos a traer el MiniCssExtractPlugin que instalamos

// Creamos un nuevo modulo que vamos a exportar con esta configuracion
// Vamos a configurar cada unos de los elementos que necesitamos

module.exports = {
// Iniciando por la entrada del proyecto
// Haciendo referencia al archivo principal
  entry: './src/index.js',
  // En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuracion
  output: {
    // La instancia resolve nos ayuda a detectar el directorio donde nos encontramos y el directorio donde vamos a guardar los archivos compilados
    path: path.resolve(__dirname, 'dist'),
    // Filename nos pode un nombre al archivo compilado
    filename: 'bundle.js',
    publicPath: '/', //de esta forma le decimos que de alli van a partir nuetsros elementos cuando haga una busqueda por medio de url para los videos
  },
  // Este elemento resulve las extensiones que vamos a utilizar
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Modulo con las reglas necesarias
  module: {
    rules: [{
    // Regla principal
    // Identificacion de los archivos con una expresion regular
      test: /\.(js|jsx)$/,
      // Exclusion de carpetas
      exclude: /node_modules/,
      // Utilizamos el loader de babel instalado
      use: {
        loader: 'babel-loader',
      },
    },
    {
      // Regla para trabajar con los archivos html
      test: /\.html$/,
      // Utilizamos el loader de babel instalado
      use: {
        loader: 'html-loader',
      },
    },
    //vamos a crear la nueva regla para que pueda leer los archivos de css
    {
      test: /\.(s*)css$/, //expresion regular que se va encargar de identificar los archivos que sean scss o los css
      use: [ //le vamos a pasar los elementos de loader
        {
          loader: MiniCssExtractPlugin.loader, //es el loader que vamos a usar
        },
        //añadimos el loader de css y scss
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|gif|jpg|svg)$/,
      use: [{
        'loader': 'file-loader',
        options: {
          name: 'assets/[hash].[ext]',
        },
      },
      ],
    },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  // Se añaden los plugins que necesitamos
  plugins: [
  // pasamo un objeto con la configuracion que necesitamos

    new HtmlWebpackPlugin({
      //Donde esta ubicado el template que tenemos
      template: './public/index.html',
      filename: './index.html',
    }),
    //añadir el nuevo plugin que nos va ayudar a crear nuestros elemento
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css', //como voy a llamar el archivo resultante
    }),
  ],
};
