# Lab 8 - Starter

Minh Dinh

Check your understanding:

1. I would put automated testing whenever someone attempts to merge code into the production branch. In other words, when a pull request into the production branch is opened or when new code is pushed to that pull request, then all the automated tests will run. However, I would also encourage people to run the tests in their local environment before pushing to the pull request to resolve testing issues beforehand.
2. No, you would use a unit test.
3. A messaging feature would require data to be sent across a network to another user. A unit test could simulate sending and receiving messages using mocks, but this would not be a very effective way to test a messaging features, so I would not use a unit test to test out messaging.
4. Testing the max length of a message is very simple and isolated feature, therefore it would make sense to use a unit test to test it.
