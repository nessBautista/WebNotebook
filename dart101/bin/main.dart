import 'package:dart101/dart101.dart' as dart101;
import 'dart:async';

/*
main(List<String> arguments) {
  print('Hello world');
  print(4 - 1);
  print(true);
  for(int i = 0; i < 5; i++){
    print(i);
  }
  loadString("Hello from Dart").then((s)=> print(s));
}

Future<String> loadString(String str) {
  return Future.delayed(Duration(seconds:3)).then((_){
    return "String: $str";
  });
}
*/

main(List<String> arguments) async {
  
  String str = await loadString("Hello from Dart Async 1");
  print(str);

  // String str2 = await loadString("Hello from Dart Async 2");
  // print(str2);
  loadString("Hello from Dart Async 2").then(
    (s)=> print(s),
  );

  Function x = await addAsync(50);
  int z = await x(30);
  print(z);

  addAsync(40)
    .then(
      (x) => x(50),
    )
    .then(
      (y) => print(y),
    );

  
  
}

Future<String> loadString(String str) async{
  await Future.delayed(Duration(seconds:1));
  return "String: $str";
}

Future<Function> addAsync(int x) async {
  return (int y) async => x + y;
}
