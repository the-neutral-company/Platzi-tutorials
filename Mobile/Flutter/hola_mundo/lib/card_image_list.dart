import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'card_image.dart';

class CardImageList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      height: 350.0,
      child: ListView(
        padding: EdgeInsets.all(25.0),
        scrollDirection: Axis.horizontal,
        children: [
          CardImage('assets/images/spiral1.jpg'),
          CardImage('assets/images/spiral2.jpg'),
          CardImage('assets/images/spiral3.jpg'),
          CardImage('assets/images/spiral4.jpg')
        ],
      ),
    );

    throw UnimplementedError();
  }

}