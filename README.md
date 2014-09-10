sencha-context-objects
======================

An example of using context objects to scope and to type-hint events in Sencha Touch and Ext JS.

This repository contains an example Sencha Touch app to demonstrate the idea of context object for events.
It goes along with a lightning talk I gave at a Chicago Sencha meetup on July 17, 2014:
http://www.meetup.com/Chicago-Sencha-User-Group/events/182825812/

It doesn't implement any real functionality; it's just a demo to show how to use the technique I described.

If you are using Sencha Cmd, you can start a local web server from the command line in the sencha-context-objects
directory:

```sh
sencha web start
```

Then, point your web browser at http://localhost:1841/ You'll see something like this:

![Main Page](/screenshots/main.png?raw=true "Main Page")

Clicking the buttons fires the various events. Clicking "Log In" fires the event and passes a User object as a
parameter, which is how the event listener knows what name to display.

![Logged-In Event](/screenshots/logged-in.png?raw=true "Logged-In Event")

![Logged-Out Event](/screenshots/logged-out.png?raw=true "Logged-Out Event")

![Pause Event](/screenshots/pause.png?raw=true "Pause Event")
