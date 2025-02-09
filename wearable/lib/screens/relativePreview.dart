import 'package:flutter/material.dart';

class RelativePreview extends StatefulWidget {
  const RelativePreview({
    super.key,
    required this.firstName,
  });

  final String firstName;

  @override
  State<RelativePreview> createState() => _RelativePreviewState();
}

class _RelativePreviewState extends State<RelativePreview> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Flexible(
              flex: 4,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    height: 40.0,
                    width: 40.0,
                    decoration: const BoxDecoration(
                      color: Colors.red, // Moved color here
                      shape: BoxShape.circle, // Circle shape
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    "${widget.firstName}'s Information",
                    style: const TextStyle(fontFamily: "TeacherSemiBold"),
                  ),
                  const SizedBox(height: 3),
                  const Text(
                    "Family Member",
                    style: TextStyle(
                        fontFamily: "TeacherRegular",
                        fontSize: 8,
                        color: Color.fromARGB(255, 150, 150, 150)),
                  )
                ],
              )),
          Flexible(
            flex: 1,
            child: Container(
              padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 179, 27, 27),
                      borderRadius:
                          BorderRadius.circular(4), // Simplified borderRadius
                    ),
                    height: 30.0,
                    width: 80.0,
                    alignment: Alignment
                        .center, // Center the child within the container
                    child: const Icon(
                      Icons.safety_check,
                      color: Colors.white,
                      size: 20,
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 7, 25, 82),
                      borderRadius:
                          BorderRadius.circular(4), // Simplified borderRadius
                    ),
                    height: 30.0,
                    width: 80.0,
                    alignment: Alignment
                        .center, // Center the child within the container
                    child: const Icon(
                      Icons.settings,
                      color: Colors.white,
                      size: 20,
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// Container(
//                   height: 40.0,
//                   width: 40.0,
//                   decoration: const BoxDecoration(
//                     color: Colors.red, // Moved color here
//                     shape: BoxShape.circle, // Circle shape
//                   ),
//                 ),
