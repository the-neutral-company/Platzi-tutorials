import 'package:flutter/material.dart';
import 'review.dart';

class ReviewList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build

    return Column(
      children: [
        Review('assets/images/neutral.jpg', 'Alan Brito', '10 photos 1 comment', 'Wena wena!!!'),
        Review('assets/images/neutral.jpg', 'Esteban Dido', '0 photos 3 comment', 'Mish!'),
        Review('assets/images/neutral.jpg', 'Elsa Polindo', '0 photos 3 comment', 'Bah!!')
      ],
    );

    throw UnimplementedError();
  }

}