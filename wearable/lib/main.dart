import 'package:flutter/material.dart';
import 'package:wearable/screens/relatives.dart';
import 'package:wearable/sensors/location.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(const MaterialApp(
    debugShowCheckedModeBanner: false,
    home: RelativeScreen(),
  ));
}
