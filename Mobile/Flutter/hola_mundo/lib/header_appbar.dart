import 'package:flutter/material.dart';
import 'card_image_list.dart';
import 'gradient_back.dart';

class HeaderAppbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Stack(
      children: [
        GradientBack('Popular'),
        CardImageList()
      ],
    );
    throw UnimplementedError();
  }

}