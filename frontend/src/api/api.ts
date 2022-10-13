import { User } from "../types";

const baseUrl = 'http://localhost:8000/users'

export const getUsers = async () => {
    const response = await fetch(baseUrl);
    return response.json();
}

export const createUser = async (requestBody: Omit<User, 'id'>) => {
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });
}

export const deleteUser = async (userId: number) => {
    await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });
}
