# Coder's Bracket 2014

This is my entry to the coder's bracket competition 2014 [https://www.codersbracket.com/](https://www.codersbracket.com/).

### Description
Basically it's a bracketoligist approach. I took some very basic stats on how often 1st place has beat 16th place etc... and extrapolated them for all positions.

#### Example
For example if I saw a match up against a 1 vs 15 I would know that the chances of 1 prevailing would be very similar to 1 vs 16 (100%) and 2 vs 15 (96%). So then I would say the chances of 1 beating 15 is:
```
var chance = (1 + .96)/2;
if (Math.random() < chace) {
  team1.win();
} else {
  team2.win();
}
```

So I end up approximating the odds, then rolling a dice and hoping I get lucky!

### Results
So far nothing spectacular but I'll update here once it's over!
