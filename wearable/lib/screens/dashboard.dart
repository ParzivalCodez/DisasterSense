import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8),
      child: Column(
        children: [
          const Expanded(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [Icon(Icons.menu), Icon(Icons.notifications)],
            ),
          ),
          Flexible(
            flex: 5,
            child: Column(
              children: [
                Flexible(
                  flex: 6,
                  child: Column(
                    children: [
                      Container(
                        height: 40.0,
                        width: 40.0,
                        decoration: const BoxDecoration(
                          color: Colors.red, // Moved color here
                          shape: BoxShape.circle, // Circle shape
                        ),
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      Text(
                        "Welcome, Hector",
                        style: GoogleFonts.dmSans(fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(
                        height: 5,
                      ),
                      Text(
                          textAlign: TextAlign.center,
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                          style: GoogleFonts.dmSans(fontSize: 7))
                    ],
                  ),
                ),
                Row(
                  //   child: GridView.count(
                  // crossAxisSpacing: 10,
                  // crossAxisCount: 2,
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        color: const Color.fromARGB(255, 179, 27, 27),
                        borderRadius:
                            BorderRadius.circular(4), // Simplified borderRadius
                      ),
                      height: 30.0,
                      width: 50.0,
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
                      width: 50.0,
                      alignment: Alignment
                          .center, // Center the child within the container
                      child: const Icon(
                        Icons.home,
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
                      width: 50.0,
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
              ],
            ),
          ),
        ],
      ),
    );
  }
}
