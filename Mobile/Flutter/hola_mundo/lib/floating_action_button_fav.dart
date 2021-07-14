import 'package:flutter/material.dart';

class FloatingActionButtonFav extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _FloatingActionButton();
    throw UnimplementedError();
  }
}

class _FloatingActionButton extends State<FloatingActionButtonFav> {
  bool pressed = false;
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    void onPressedFav(){
      Scaffold.of(context).showSnackBar(
          SnackBar(
              content: Text('Like!')
          )
      );
      setState(() {
        pressed = !this.pressed;
      });
    }

    return FloatingActionButton(
      backgroundColor: Colors.green,
      mini: true,
      tooltip: 'Fav',
      child: Icon(
        pressed ? Icons.favorite : Icons.favorite_border
      ),
      onPressed: onPressedFav,
    );
    throw UnimplementedError();
  }

}