import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'package:wearable/screens/relativePreview.dart';

class RelativeScreen extends StatefulWidget {
  const RelativeScreen({super.key});
  @override
  State<RelativeScreen> createState() => _RelativeScreenState();
}

class Person {
  final String firstName;
  final String lastName;
  Person(this.firstName, this.lastName);
}

class _RelativeScreenState extends State<RelativeScreen> {
  List<dynamic> informations = [];
  late List ArrayLoop = [];

  Future<void> getRelatives() async {
    var Url =
        Uri.parse("http://192.168.1.62:3000/api/relatives/location/get-all");
    var response = await http
        .post(Url, body: {"userId": "2935E6AD-403B-426E-BEA2-C7735D0E6CEB"});

    Map information = jsonDecode(response.body);

    information["members"].forEach((item) {
      informations.add(Person(item["firstName"], item["lastName"]));
    });
    setState(() {
      ArrayLoop = informations;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getRelatives();
  }
  // return Column(
  //   children: [
  //     ...ArrayLoop.map((item) {
  //       return RelativeProfile(item.firstName, item.lastName);
  //     })
  //   ],
  // );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.all(8),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Family Information",
                  style: TextStyle(fontFamily: "TeacherSemiBold"),
                ),
                Text(
                  "Lorem ipsum dolor sit amet, consectetur",
                  style: TextStyle(fontSize: 8, fontFamily: "TeacherRegular"),
                )
              ],
            ),
            Flexible(
              flex: 3,
              child: ListView(
                children: [
                  ...ArrayLoop.map((item) {
                    return RelativeProfile(item.firstName, item.lastName);
                  })
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class RelativeProfile extends StatefulWidget {
  const RelativeProfile(this.firstName, this.lastName, {super.key});

  final String firstName;
  final String lastName;

  @override
  State<RelativeProfile> createState() => _RelativeProfileState();
}

class _RelativeProfileState extends State<RelativeProfile> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) =>
                  RelativePreview(firstName: widget.firstName)),
        );
      },
      child: Column(
        children: [
          Container(
              child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "${widget.firstName} ${widget.lastName}",
                    style: const TextStyle(fontFamily: "TeacherSemiBold"),
                  ),
                  const Text(
                    "Father",
                    style:
                        TextStyle(fontFamily: "TeacherRegular", fontSize: 10),
                  )
                ],
              ),
              Container(
                padding: const EdgeInsets.all(1),
                height: 17,
                width: 47,
                decoration: BoxDecoration(
                  color: const Color.fromARGB(
                      255, 91, 175, 108), // Background color

                  borderRadius: BorderRadius.circular(8), // Rounded corners
                ),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Icon(
                      Icons.dangerous,
                      size: 10,
                      color: Colors.white,
                    ),
                    SizedBox(
                      width: 4,
                    ),
                    Align(
                      alignment: Alignment.center,
                      child: Text(
                        "100",
                        style: TextStyle(
                            fontSize: 8,
                            color: Colors.white,
                            fontFamily: "TeacherRegular"),
                      ),
                    )
                  ],
                ),
              )
            ],
          )),
          const SizedBox(
            height: 10,
          )
        ],
      ),
    );
  }
}
