
class generateStats:

    def get_data(self, users, one_month_events):
        data = []

        data.append(self.get_allGenderData(users))
        data.append(self.get_genderTagData(users, one_month_events))
        return data

    def get_allGenderData(self, users):

        maleCounter = 0
        femaleCounter = 0
        unknownCounter = 0
        for hit in users:

            js = hit.gender

            if js == "male":
                maleCounter += 1
            if js == "female":
                femaleCounter += 1
            if js == "unknown":
                unknownCounter += 1

        return [maleCounter, femaleCounter, unknownCounter]

    def get_genderTagData(self, users, one_month_events):



        maleCounter = 0
        femaleCounter = 0
        unknownCounter = 0

        for event in one_month_events:

            for user in users:

                if str(user.tag_id) == str(event.tag_id):
                    if user.gender == "male":
                        maleCounter += 1
                    if user.gender == "female":
                        femaleCounter += 1
                    if user.gender == "unknown":
                        unknownCounter += 1

        return [maleCounter, femaleCounter, unknownCounter]
