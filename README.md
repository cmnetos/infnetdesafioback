#   R E S T   A P I   E x e m p l o  
  
 E s t e   �   u m   e x e m p l o   b � s i c o   d e   A P I   R E S T   c o m   u t i l i z a � � o   d e   O R M   e   b a n c o   d e   d a d o s   M y S Q L .  
  
 # #   E x e c u � � o   d a   A P I  
  
 P a r a   a   e x e c u � � o   d a   A P I   �   n e c e s s � r i o   c o n f i g u r a r   a s   v a r i � v e i s   d e   a m b i e n t e   n o   a r q u i v o   * * n o d e m o n . j s o n * *   c o n f o r m e   o s   p a r � m e t r o s   a b a i x o :  
  
 -   " M Y S Q L _ H O S T "   =   " " ,  
 -   " M Y S Q L _ U S E R N A M E "   =   " " ,  
 -   " M Y S Q L _ P A S S W O R D "   =   " " ,  
 -   " M Y S Q L _ D A T A B A S E "   =   " "  
  
 # #   S c r i p t   d e   B a n c o   d e   D a d o s  
  
 # # #   E s t r u t u r a   d a   t a b e l a   ` c u r s o s `  
  
 ` C R E A T E   T A B L E   c u r s o s   ( `  
     ` i d   i n t ( 1 1 )   N O T   N U L L   A U T O _ I N C R E M E N T , `  
     ` d e s c r i c a o   v a r c h a r ( 1 0 0 )   C O L L A T E   l a t i n 1 _ g e n e r a l _ c i   N O T   N U L L , `  
     ` c r e a t e d _ a t   d a t e t i m e   N O T   N U L L , `  
     ` u p d a t e d _ a t   d a t e t i m e   N O T   N U L L `  
 ` )   E N G I N E = I n n o D B   D E F A U L T   C H A R S E T = l a t i n 1   C O L L A T E = l a t i n 1 _ g e n e r a l _ c i ; `  
  
 - -   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
  
 # # #   E s t r u t u r a   d a   t a b e l a   ` u s u a r i o s `  
  
 ` C R E A T E   T A B L E   u s u a r i o s   ( `  
     ` i d   i n t ( 1 1 )   N O T   N U L L   A U T O _ I N C R E M E N T , `  
     ` u s u a r i o   v a r c h a r ( 1 0 0 )   C O L L A T E   l a t i n 1 _ g e n e r a l _ c i   N O T   N U L L , `  
     ` p a s s w o r d _ h a s h   v a r c h a r ( 1 0 0 )   C O L L A T E   l a t i n 1 _ g e n e r a l _ c i   N O T   N U L L , `  
     ` c r e a t e d _ a t   d a t e t i m e   N O T   N U L L , `  
     ` u p d a t e d _ a t   d a t e t i m e   N O T   N U L L `  
 ` )   E N G I N E = I n n o D B   D E F A U L T   C H A R S E T = l a t i n 1   C O L L A T E = l a t i n 1 _ g e n e r a l _ c i ; `  
  
 # # #   I n d e x e s   f o r   t a b l e   ` c u r s o s `  
  
 ` A ` L T E R   T A B L E   c u r s o s `  
     ` A D D   P R I M A R Y   K E Y   ( i d ) , `  
     A D D   U N I Q U E   K E Y   u n _ c u r s o _ d e s c r i c a o   ( d e s c r i c a o ) ; `  
  
 # # #   I n d e x e s   f o r   t a b l e   ` u s u a r i o s `  
 ` A ` L T E R   T A B L E   u s u a r i o s `  
     ` A D D   P R I M A R Y   K E Y   ( i d ) , `  
     A D D   U N I Q U E   K E Y   u n _ u s u a r i o _ u s u a r i o   ( u s u a r i o ) ; `  
  
 #   A P I   R E S T  
  
 A   A P I   R E S T   �   d e s c r i t a   a b a i x o  
  
 # #   I n c l u i r   u s u � r i o  
  
 # # #   S o l i c i t a � � o  
  
 ` P O S T   / u s u a r i o s / `  
  
 # # #   C o r p o  
  
 ` {  
 	 " u s u a r i o " :   " t e s t e " ,  
 	 " p a s s w o r d " :   " 1 2 3 4 5 6 7 8 "  
 } `  
  
 # # #   R e s p o s t a s  
  
 ` ` H T T P / 1 . 1   2 0 0   O K   { " i d " :   4 ,       " u s u a r i o " :   " t e s t e " } ` `  
  
 ` H T T P / 1 . 1   4 0 0   B a d   R e q u e s t   {     " m e n s a g e m " :   " F a l h a   n a   v a l i d a � � o .   U s u � r i o   �   o b r i g a t � r i o   e   s e n h a   d e v e   c o n t e r   n o   m � n i m o   8   c a r a c t e r e s " } `  
  
  
  
 # #   A u t e n t i c a r  
  
 # # #   S o l i c i t a � � o  
  
 ` P O S T   / a u t h / `  
  
 # # #   C o r p o  
  
 ` {  
 	 " u s u a r i o " :   " t e s t e " ,  
 	 " p a s s w o r d " :   " 1 2 3 4 5 6 7 8 "  
 } `  
  
 # # #   R e s p o s t a s  
  
 ` ` H T T P / 1 . 1   2 0 0   O K   {     " t o k e n " :   " e y J h b G c i O i J I U z I 1 N i I s I n R 5 c C I 6 I k p X V C J 9 . e y J p Z C I 6 N C w i a W F 0 I j o x N j E 1 M z Y 5 M j M 0 L C J l e H A i O j E 2 M T U 0 N T U 2 M z R 9 . S v e O m 8 s u j Q 0 S _ e z Y S 9 Z 0 1 C 2 f - V G D c Z V N K 9 K J D S 3 H T R 2 d A " } ` `  
  
 ` H T T P / 1 . 1   4 0 0   B a d   R e q u e s t   {     m e n s a g e m :   ' b o d y   s e m   u s u a r i o   o u   p a s s w o r d . ' } `  
  
 ` H T T P / 1 . 1   4 0 0   B a d   R e q u e s t   N o   B o d y `  
  
 ` H T T P / 1 . 1   4 0 1   U n a u t h o r i z e d   { m e n s a g e m :   " s e m   t o k e n   n o   c a b e c a l h o " } `  
  
 ` H T T P / 1 . 1   4 0 3   F o r b i d d e n { m e n s a g e m :   " t o k e n   i n v a l i d o " } `  
  
  
  
 # #   L i s t a r   C u r s o s  
  
 # # #   S o l i c i t a � � o  
  
 G E T   / c u r s o s / `  
  
 # # #   C o r p o  
  
 N o   b o d y  
  
 # # #   R e s p o s t a s  
  
 ` ` H T T P / 1 . 1   2 0 0   O K   { [ ] } ` `  
  
 # #   E r r o s   c o m u n s  
  
 ` ` ` H T T P / 1 . 1   4 0 4   N o t   F o u n d `  
  
 ` ` ` H T T P / 1 . 1   5 0 0   I n t e r n a l   S e r v e r   E r r o r `  
  
 